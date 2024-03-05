import { Card, CardContent, Typography, CardHeader } from '@mui/material'

export const CardItem = () => {
    return (
        <Card
            className="shadow"
            sx={{
                borderRadius: 8, // Bordes redondeados
            }}
        >
            <CardHeader
                title="Cambio de módulos de pantalla"
                sx={{ color: '#1976d2' }}
                className="fw-bold"
                // Si quieres agregar un subtitulo, puedes usar la prop "subheader"
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    Realizamos cambios de pantalla para equipos de baja, mediana
                    y alta gama, ofreciendo reparaciones con repuestos de
                    calidad original y en tiempo récord. Lo traes y te lo llevas
                    en el mismo día.
                </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
                <IconButton aria-label="Compartir">
                    <FontAwesomeIcon icon={faGithub} />
                </IconButton>
            </CardActions> */}
        </Card>
    )
}
