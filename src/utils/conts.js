import { createTheme } from '@mui/material'

export const images = [
    'public/Images/ameen-almayuf-OQ4tJVXMCYM-unsplash.jpg',
    'public/Images/kilian-seiler-PZLgTUAhxMM-unsplash.jpg',
    'public/Images/repair-8321204_1280.jpg',
    'public/Images/thisisengineering-raeng-IpTPp_aPbYE-unsplash.jpg',
    'public/Images/work-8304180_1920.jpg',
] // Rutas de las imágenes

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
})
