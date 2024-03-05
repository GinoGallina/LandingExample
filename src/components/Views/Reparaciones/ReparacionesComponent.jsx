import { Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CardScrollComponent } from './CardScrollComponent'

export const ReparacionesComponent = () => {
    const AnimatedButton = motion(Button)

    const { ref, inView } = useInView({
        triggerOnce: true, // Para que la animación ocurra solo una vez
        threshold: 0.3, // Umbral de visibilidad (0.5 significa que cuando el 50% del div esté visible)
    })
    return (
        <div className="col-12 row mt-3">
            <div className="col-12 col-md-6 p-4">
                <motion.div
                    ref={ref}
                    initial={{ x: -100, opacity: 0 }} // Estado inicial fuera de la pantalla y opacidad 0
                    animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }} // Animación de subida y aparición al estar en pantalla
                    transition={{ duration: 0.5, ease: 'easeOut' }} // Duración y tipo de transición
                    style={{ height: '100%' }}
                >
                    <Typography
                        className="my-3 text-center text-sm-start"
                        variant="h6"
                        style={{ color: 'black' }}
                    >
                        REPARACIONES
                    </Typography>
                    <Typography
                        className="my-3"
                        variant="h4"
                        style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: '#1976d2',
                        }}
                    >
                        Solución en problemas de Smartphones
                    </Typography>
                    <p className="my-3">
                        Descubrí nuestras soluciones expertas para tu equipo.
                        Ofrecemos reparaciones rápidas y eficientes para
                        mantener tu dispositivo en óptimas condiciones. Si no
                        figura una reparación acá, podés contactarnos.
                    </p>
                    <motion.div
                        initial={{ scale: 1.5 }} // Estado inicial fuera de la pantalla y opacidad 0
                        animate={{ scale: 1 }} // Animación de subida y aparición al estar en pantalla
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="d-inline-block"
                    >
                        <AnimatedButton
                            sx={{ backgroundColor: 'black', color: 'white' }}
                            className="my-3"
                            variant="contained"
                            initial={{ scale: 1.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                            }}
                            viewport={{ once: true }}
                        >
                            Cotizá!
                        </AnimatedButton>
                    </motion.div>
                </motion.div>
            </div>
            <div
                className="col-12 col-md-6 p-4 border shadow rounded "
                style={{
                    // height: '100%',
                    backgroundImage:
                        'linear-gradient(to bottom right, #0F3057, #242840)',
                    maxHeight: '500px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
            >
                <CardScrollComponent></CardScrollComponent>
            </div>
        </div>
    )
}
