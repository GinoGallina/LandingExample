import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'

import { motion } from 'framer-motion'
import { ImgCarrousel } from './ImgCarrousell'
export const InicioComponent = () => {
    return (
        <div id="inicio" className="inicio col-12 row">
            <div className="col-12 col-md-6 p-4">
                <motion.div
                    initial={{ y: 100, opacity: 0 }} // Estado inicial fuera de la pantalla y opacidad 0
                    animate={{ y: 0, opacity: 1 }} // Animación de subida y aparición al estar en pantalla
                    transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de transición
                    style={{ height: '100%' }}
                >
                    <Typography
                        className="my-3 text-center text-md-start"
                        variant="h6"
                        style={{ color: '#1976d2' }}
                    >
                        REPARACIONES EN ROSARIO
                    </Typography>
                    <Typography
                        // noWrap
                        className="my-3"
                        variant="h2"
                        style={{
                            fontSize: '4rem',
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                    >
                        Reparamos todas las marcas y al mejor precio
                    </Typography>
                    <Typography variant="body1" className="my-3">
                        Reparamos tu equipo rápido y sin complicaciones! Confiá
                        en Costantino, nos avalan nuestros años de experiencia.
                    </Typography>
                    <div className="text-center">
                        <motion.div
                            className="d-inline-block"
                            initial={{ scale: 1.6 }} // Estado inicial fuera de la pantalla y opacidad 0
                            animate={{ scale: 1 }} // Animación de subida y aparición al estar en pantalla
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                            }}
                        >
                            <Button
                                className="my-3"
                                variant="contained"
                                color="success"
                                startIcon={
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                }
                            >
                                Contáctanos
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
                <ImgCarrousel></ImgCarrousel>
            </div>
        </div>
    )
}
