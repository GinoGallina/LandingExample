import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

export const GoodbyeComponent = () => {
    return (
        <div className="col-12 d-flex mt-5">
            <motion.div
                className="col-4 text-center"
                initial={{ scaleX: 1, scaleY: 0 }} // Inicialmente con clipPath 0
                animate={{}} // Animación para expandir
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Duración y tipo de transición
                whileInView={{
                    scaleX: 1,
                    scaleY: 1,
                }}
                viewport={{ once: true }}
            >
                <Typography variant="h3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
            </motion.div>
            <div className="col-4">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        type: 'spring',
                        damping: 10,
                        stiffness: 100,
                        delay: 1,
                    }}
                    viewport={{ once: true }}
                >
                    <button> aaa</button>
                </motion.div>
            </div>
            <div className="col-4" style={{ backgroundColor: 'purple' }}>
                <motion.div
                    style={{ width: '200px', height: '200px' }}
                    className=""
                    whileInView={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                    }}
                    viewport={{ once: true }}
                >
                    Hola
                </motion.div>
            </div>
        </div>
    )
}
