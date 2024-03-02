import { useEffect, useState } from 'react'
import { images } from '../../../utils/conts.js'
import { motion } from 'framer-motion'

export const ImgCarrousel = () => {
    const [currentImage, setCurrentImage] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length) // Cambia la imagen cada 5 segundos (5000 ms)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="img-container"
            style={{
                width: '100%',
                height: '400px',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {images.map((img, index) => {
                return (
                    <motion.div
                        key={img}
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{
                            opacity: index === currentImage ? 1 : 0,
                            scale: index === currentImage ? 1.1 : 1,
                        }}
                        transition={{ duration: 2 }}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                        }}
                    ></motion.div>
                )
            })}
        </div>
    )
}
