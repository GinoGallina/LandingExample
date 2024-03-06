import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

export const AccesoriosComponent = () => {
    return (
        <>
            <div id="accesorios" className="contenedor col-12 mt-4">
                <div className="imagen ">
                    <div className="oscurecer ">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                            }} // Efecto de rebote
                            viewport={{ once: true }}
                            className="motion-div d-flex flex-column justify-content-center align-items-center"
                        >
                            <Typography sx={{ color: 'white' }} variant="h4">
                                Accesorios
                            </Typography>
                            <Typography
                                sx={{ color: 'white' }}
                                className="text-center mt-3"
                                variant="body1"
                            >
                                Tenemos una amplia línea de accesorios tales
                                como: Fundas, cargadores, cables, auriculares,
                                relojes, periféricos, parlantes y mucho más. No
                                dudes contactarnos o visitar nuestro local.
                            </Typography>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
