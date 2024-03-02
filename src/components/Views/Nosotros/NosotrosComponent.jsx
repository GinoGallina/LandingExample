import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const NosotrosComponent = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Para que la animación ocurra solo una vez
        threshold: 0.3, // Umbral de visibilidad (0.5 significa que cuando el 50% del div esté visible)
    })
    return (
        <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Estado inicial fuera de la pantalla y opacidad 0
            animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }} // Animación de subida y aparición al estar en pantalla
            transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de transición
            className="col-12 row my-5 px-4"
        >
            <Card className="d-flex flex-column flex-sm-row p-3 w-100 w-sm-75 my-auto">
                <CardMedia
                    sx={{ objectFit: 'auto' }}
                    component="img"
                    height="400"
                    image="public\images\a1cd6ea7-0cd7-453a-8e8d-4cd9bbd34c62.jpg" // Reemplaza con la ruta de tu imagen
                    alt="Imagen"
                />
                <CardContent className="w-100 w-sm-50 p-4">
                    <Typography variant="h6" style={{ color: '#1976d2' }}>
                        Nosotros
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h4"
                        style={{
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                        component="div"
                    >
                        Tu socio tecnológico en Mar del Plata
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Somos una empresa marplatense, familiar y en constante
                        expansión, dedicada exclusivamente al área de
                        tecnología. Ofrecemos servicios de reparaciones express,
                        microelectrónica, venta de accesorios y más. Por estas y
                        otras razones, somos los únicos que brindamos un amplio
                        abanico de posibilidades para compartir nuestra vocación
                        con todos nuestros clientes. Les transmitimos nuestros
                        conocimientos para ofrecer un mejor servicio y calidad
                        de atención, características que nos distinguen. A lo
                        largo de los años, desarrollamos técnicas que nos
                        permiten realizar reparaciones de excelente calidad,
                        optimizando al máximo el tiempo. Estamos en constante
                        avance, perfeccionándonos para ofrecer el mejor servicio
                        con la máxima seriedad y proporcionando a los clientes
                        una Garantía Escrita por nuestros trabajos.
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        style={{ color: '#1976d2' }}
                    >
                        El equipo de Costantino
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    )
}
