import { motion } from 'framer-motion'
import { CardItem } from './CardItem'
import { useEffect, useState } from 'react'

export const CardScrollComponent = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []) // El segundo argumento del useEffect es un array vacío, esto asegura que el efecto se ejecute solo una vez después del montaje del componente

    const food = [['🍅'], ['🍊'], ['🍋'], ['🍐'], ['🍏'], ['🍆'], ['🍇']]

    // const hue = (h) => `hsl(${h}, 100%, 50%)`

    return food.map((emoji, index) => {
        // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`
        // console.log(index, emoji)
        return (
            <motion.div
                style={{ width: '300px', height: '300px' }}
                className=" my-5 mx-auto"
                initial={{
                    x: index % 2 == 0 ? 200 : -200,
                    rotate: index % 2 == 0 ? -10 : 10,
                }}
                whileInView={{ x: 0, rotate: 0 }}
                viewport={{ amount: width < 700 ? 0.4 : 0.6 }}
                transition={{
                    type: 'spring',
                    bounce: 0.4,
                    duration: 1,
                }}
                key={emoji}
            >
                {/* <div className="splash" style={{ background }} /> */}
                <CardItem></CardItem>
            </motion.div>
        )
    })
}
