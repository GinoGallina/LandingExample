import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { ThemeProvider } from '@emotion/react'
import { darkTheme } from '../../../utils/conts'
import { motion } from 'framer-motion'

const pages = ['Inicio', 'Reparaciones', 'Nosotros', 'Accesorios']

const AnimatedButton = motion(Button)

function Navbar() {
    const [activePage, setActivePage] = React.useState(0) // Estado para la opción activa

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = pages.map((page) =>
                document.getElementById(page.toLowerCase()),
            )
            const scrollPosition = window.scrollY + window.innerHeight / 2
            const activeIndex =
                sections.findIndex(
                    (section) => section.offsetTop > scrollPosition,
                ) - 1
            setActivePage(activeIndex >= 0 ? activeIndex : sections.length - 1)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <a
                                className="text-white text-decoration-none"
                                href="#inicio"
                            >
                                LOGO
                            </a>
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <a
                                            href={`#${page.toLowerCase()}`}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                            }}
                                        >
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </a>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: {
                                    xs: 'none',
                                    md: 'flex',
                                },
                                justifyContent: 'flex-end',
                            }}
                        >
                            {pages.map((page, index) => (
                                <AnimatedButton
                                    key={index}
                                    href={`#${page.toLowerCase()}`}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        position: 'relative',
                                    }}
                                >
                                    {page}
                                    {activePage == index ? (
                                        <motion.div
                                            layoutId="underline"
                                            className="position-absolute"
                                            style={{
                                                bottom: '-5',
                                                left: '0',
                                                right: '0',
                                                height: '1px',
                                                backgroundColor: 'white',
                                            }}
                                        >
                                            <span></span>
                                        </motion.div>
                                    ) : null}
                                </AnimatedButton>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
export default Navbar
