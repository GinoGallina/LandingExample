import { Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const ReparacionesComponent = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Para que la animación ocurra solo una vez
        threshold: 0.3, // Umbral de visibilidad (0.5 significa que cuando el 50% del div esté visible)
    })
    return (
        <div className="col-12 row mt-3" style={{ maxHeight: '500px' }}>
            <div className="col-12 col-sm-6 p-4">
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
                        <Button
                            sx={{ backgroundColor: 'black', color: 'white' }}
                            className="my-3"
                            variant="contained"
                        >
                            Cotizá!
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
            <div
                className="col-12 col-sm-6 p-4 "
                style={{ height: '100%', overflowY: 'auto' }}
            >
                <motion.p
                    initial={{ x: 100, opacity: 0 }} // Estado inicial fuera de la pantalla y opacidad 0
                    animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }} // Animación de subida y aparición al estar en pantalla
                    transition={{ duration: 0.5, ease: 'easeOut' }} // Duración y tipo de transición
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae necessitatibus assumenda repellat dignissimos
                    voluptatibus excepturi, nulla eos vitae neque maiores atque
                    nobis expedita repellendus hic quae facilis tempore rem
                    fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Facere, voluptatem iste magnam quod officiis modi eius
                    magni qui laboriosam sint culpa. Reiciendis quaerat,
                    perspiciatis doloremque similique ab eligendi id itaque?
                </motion.p>
            </div>
        </div>
    )
}
