import { Link } from 'react-router-dom';
import { Box, Grid, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import React, { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Animation Variants for Drawer Items
const drawerItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Animation Variants for Header Fade-In
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Header = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <InfoIcon />, path: '/about' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          py: { xs: 1.5, sm: 2, md: 2.5 },
          px: { xs: 2, sm: 3, md: 5 },
          boxShadow: theme.palette.mode === 'dark' 
            ? '0 8px 20px rgba(255, 255, 255, 0.1)' 
            : '0 8px 20px rgba(0, 0, 0, 0.1)',
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: theme.palette.mode === 'dark'
              ? `radial-gradient(circle at 50% 0%, ${theme.palette.primary.main}20, transparent)`
              : `radial-gradient(circle at 50% 0%, ${theme.palette.primary.main}10, transparent)`,
            zIndex: 0,
            pointerEvents: 'none',
          },
          zIndex: 1000,
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Logo Section */}
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '& img': {
                  height: { xs: 35, sm: 55, md: 75 },
                  transition: 'height 0.5s ease, transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.15) rotate(5deg)',
                  },
                },
              }}
            >
              <Link to="/">
                <img src={logo} alt="QTO House Logo" />
              </Link>
            </Box>
          </Grid>

          {/* Navigation and Theme Toggle */}
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5, md: 3 },
              }}
            >
              {/* Desktop Navigation with Icons and Text */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: { xs: 1, sm: 1.5, md: 2.5 },
                  alignItems: 'center',
                }}
              >
                {menuItems.map((item, index) => (
                  <Link to={item.path} key={item.text}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 1,
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                          transform: 'scale(1.05)',
                          boxShadow: `0 4px 10px ${theme.palette.primary.main}40`,
                        },
                      }}
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        sx={{
                          color: theme.palette.text.primary,
                          padding: 0,
                          '&:hover': {
                            color: theme.palette.primary.contrastText,
                          },
                        }}
                        aria-label={`Go to ${item.text}`}
                        disableRipple
                      >
                        {item.icon}
                      </IconButton>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          fontSize: { xs: '0.875rem', md: '1rem' },
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: theme.palette.primary.contrastText,
                          },
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Box>

              {/* Theme Toggle and Mobile Hamburger */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    color: theme.palette.text.primary,
                    padding: { xs: 0.5, md: 1 },
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                      color: theme.palette.primary.contrastText,
                      transform: 'rotate(360deg) scale(1.2)',
                      transition: 'all 0.6s ease-in-out',
                      boxShadow: `0 4px 10px ${theme.palette.primary.main}40`,
                    },
                  }}
                  aria-label="Toggle theme"
                  component={motion.button}
                  whileHover={{ rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                {/* Hamburger Icon for Mobile */}
                <Box
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <IconButton
                    onClick={toggleDrawer(true)}
                    sx={{
                      color: theme.palette.text.primary,
                      padding: { xs: 0.5, md: 1 },
                      '&:hover': {
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                        color: theme.palette.primary.contrastText,
                        transform: 'scale(1.2)',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: `0 4px 10px ${theme.palette.primary.main}40`,
                      },
                    }}
                    aria-label="Open menu"
                    component={motion.button}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Drawer for Mobile Navigation */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: { xs: '80%', sm: '50%', md: '40%' },
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              boxShadow: theme.palette.mode === 'dark' 
                ? '-4px 0 15px rgba(255, 255, 255, 0.1)' 
                : '-4px 0 15px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.5s ease-in-out',
              overflow: 'hidden',
              borderLeft: `2px solid ${theme.palette.primary.main}`,
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: theme.palette.mode === 'dark'
                  ? `radial-gradient(circle at 0% 0%, ${theme.palette.primary.main}20, transparent)`
                  : `radial-gradient(circle at 0% 0%, ${theme.palette.primary.main}10, transparent)`,
                zIndex: 0,
                pointerEvents: 'none',
              },
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Drawer Header */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontWeight: 600,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }}
              >
                QTO House
              </Typography>
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    transform: 'rotate(90deg)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
                aria-label="Close menu"
                component={motion.button}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Drawer Menu Items */}
            <List sx={{ py: 2 }}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={drawerItemVariants}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.path}
                      onClick={toggleDrawer(false)}
                      sx={{
                        py: 1.5,
                        px: 3,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                          color: theme.palette.primary.contrastText,
                          transform: 'translateX(10px)',
                          boxShadow: `0 4px 10px ${theme.palette.primary.main}40`,
                        },
                      }}
                      aria-label={`Go to ${item.text}`}
                    >
                      <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: 500,
                              fontSize: { xs: '1rem', sm: '1.125rem' },
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {item.text}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </motion.div>
  );
};

export default Header;