import { createTheme } from '@mui/material'

export const images = [
    '/images/ameen-almayuf-OQ4tJVXMCYM-unsplash.jpg',
    '/images/kilian-seiler-PZLgTUAhxMM-unsplash.jpg',
    '/images/repair-8321204_1280.jpg',
    '/images/thisisengineering-raeng-IpTPp_aPbYE-unsplash.jpg',
    '/images/work-8304180_1920.jpg',
] // Rutas de las imágenes

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
})
