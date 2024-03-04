import { IconButton, Toolbar, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const AnimatedTypography = motion(Typography)
const AnimatedIconButton = motion(IconButton)

const iconVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    visible: {
        opacity: 1,
        scale: 1,
    },
    hover: {
        scale: 1.5,
        transition: {
            duration: 0.3,
        },
    },
}

export const FooterComponent = () => {
    return (
        <div
            className="mt-4 footer"
            style={{ backgroundColor: 'rgb(18, 18, 18)', color: 'white' }}
        >
            <Toolbar>
                <AnimatedTypography
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.3 }}
                    variants={iconVariants}
                    variant="body1"
                    sx={{ flexGrow: 1 }}
                >
                    Gino Gallina
                </AnimatedTypography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                        variants={iconVariants}
                    >
                        <AnimatedIconButton
                            sx={{
                                color: 'white',
                                marginLeft: 2,
                            }}
                            aria-label="GitHub"
                            component="a"
                            href="https://github.com/GinoGallina"
                            target="_blank"
                            whileHover="hover"
                            variants={iconVariants}
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </AnimatedIconButton>
                    </motion.span>

                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                        variants={iconVariants}
                    >
                        <AnimatedIconButton
                            sx={{
                                color: 'white',
                                marginLeft: 2,
                            }}
                            aria-label="Instagram"
                            component="a"
                            href="https://www.instagram.com/ginogallina/"
                            target="_blank"
                            whileHover="hover"
                            variants={iconVariants}
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </AnimatedIconButton>
                    </motion.span>

                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            delay: 0.9,
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                        variants={iconVariants}
                    >
                        <AnimatedIconButton
                            sx={{
                                color: 'white',
                                marginLeft: 2,
                            }}
                            aria-label="Linkedin"
                            component="a"
                            href="https://www.facebook.com/tuusuario/"
                            target="_blank"
                            whileHover="hover"
                            variants={iconVariants}
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </AnimatedIconButton>
                    </motion.span>
                </div>
            </Toolbar>
        </div>
    )
}
