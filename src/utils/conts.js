import { createTheme } from '@mui/material'

export const images = [
    'public/images/ameen-almayuf-OQ4tJVXMCYM-unsplash.jpg',
    'public/images/kilian-seiler-PZLgTUAhxMM-unsplash.jpg',
    'public/images/repair-8321204_1280.jpg',
    'public/images/thisisengineering-raeng-IpTPp_aPbYE-unsplash.jpg',
    'public/images/work-8304180_1920.jpg',
] // Rutas de las imágenes

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
})
