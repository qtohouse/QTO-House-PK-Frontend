import { Box, Grid, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import logo from '../../assets/logo.svg';
import React, { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();
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
    <Box
      sx={{
        bgcolor: isDarkMode ? theme.palette.background.paper : theme.palette.background.default,
        py: { xs: 1, sm: 2, md: 2.5 },
        px: { xs: 2, sm: 3, md: 5 },
        boxShadow: 4,
        borderBottom: '2px solid',
        borderColor: theme.palette.primary.main,
        transition: 'all 0.6s ease-in-out',
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Logo Section */}
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& img': {
                height: { xs: 30, sm: 40, md: 50 },
                transition: 'height 0.5s ease, transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.15)',
                },
              },
            }}
          >
            <img src={logo} alt="QTO House Logo" />
          </Box>
        </Grid>

        {/* Navigation and Togglee */}
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1, md: 2.5 },
            }}
          >
            {/* Desktop Navigation with Icons */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: { xs: 0.5, sm: 1, md: 2.5 },
                alignItems: 'center',
              }}
            >
              <IconButton
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'background.default',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 2,
                    transform: 'scale(1.25)',
                    transition: 'all 0.5s ease-in-out',
                  },
                }}
                href="/"
              >
                <HomeIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'background.default',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 2,
                    transform: 'scale(1.25)',
                    transition: 'all 0.5s ease-in-out',
                  },
                }}
                href="/about"
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'background.default',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 2,
                    transform: 'scale(1.25)',
                    transition: 'all 0.5s ease-in-out',
                  },
                }}
                href="/contact"
              >
                <ContactMailIcon />
              </IconButton>
            </Box>

            {/* Mobile Menu and Theme Toggle */}
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
                  color: 'text.primary',
                  padding: 1,
                  '&:hover': {
                    color: 'background.default',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 2,
                    transform: 'rotate(360deg) scale(1.3)',
                    transition: 'all 0.6s ease-in-out',
                  },
                }}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<MenuIcon />}
                  onClick={toggleDrawer(true)}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.background.default,
                    fontWeight: 600,
                    borderRadius: 2,
                    padding: '6px 16px',
                    '&:hover': {
                      bgcolor: theme.palette.primary.dark,
                      transform: 'scale(1.15)',
                      transition: 'all 0.5s ease-in-out',
                    },
                  }}
                >
                  Menu
                </Button>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  sx={{
                    '& .MuiDrawer-paper': {
                      width: { xs: '80%', sm: '50%' },
                      background: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      boxShadow: '-2px 0px 10px rgba(0,0,0,0.3)',
                      transition: 'all 0.5s ease-in-out',
                    },
                  }}
                >
                  <List>
                    {menuItems.map((item) => (
                      <ListItem key={item.text} disablePadding>
                        <ListItemButton
                          component="a"
                          href={item.path}
                          sx={{
                            '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.background.default,
                              transition: 'all 0.3s ease-in-out',
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: 'inherit' }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;