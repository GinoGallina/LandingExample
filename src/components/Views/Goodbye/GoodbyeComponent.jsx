import { motion } from 'framer-motion'

export const GoodbyeComponent = () => {
    return (
        <div className="col-12 d-flex mt-5">
            <motion.div
                className="col-4 text-center"
                initial={{ clipPath: 'circle(0%)' }} // Inicialmente con clipPath 0
                animate={{}} // Animación para expandir
                transition={{ duration: 3, ease: 'easeInOut' }} // Duración y tipo de transición
                whileInView={{
                    clipPath: 'circle(100%)',
                }}
                // transition={{
                //     duration: 1,
                //     type: 'spring',
                //     damping: 10,
                //     stiffness: 100,
                //     delay: 1,
                // }}
                viewport={{ once: true }}
            >
                <h1>Holas</h1>
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
            <div className="col-4 d-flex ">
                <motion.button
                    className="mx-auto btn btn-success"
                    whileInView={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                    }}
                    viewport={{ once: true }}
                    // style={{
                    //     width: '50%',
                    //     height: '50%',
                    //     backgroundColor: 'green',
                    // }}
                >
                    Hola
                </motion.button>
            </div>
        </div>
    )
}
