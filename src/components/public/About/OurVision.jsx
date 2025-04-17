import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const visionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.15, ease: "easeOut" },
  }),
};

const iconVariants = {
  hover: {
    rotate: 15,
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

function OurVision() {
  const theme = useTheme();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={visionVariants}
    >
      <Box
        sx={{
          borderRadius: '12px',
          overflow: 'hidden',
          bgcolor: theme.palette.background.paper,
          backdropFilter: "blur(12px)",
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
          boxShadow: theme.palette.mode === 'dark' 
            ? '0 6px 15px rgba(255, 255, 255, 0.1)' 
            : '0 6px 15px rgba(0, 0, 0, 0.1)',
          maxWidth: { xs: '100%', sm: '90%', md: '100%' },
          height: '100%',
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
          cursor: 'pointer',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: theme.palette.mode === 'dark'
              ? `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}20, transparent)`
              : `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}10, transparent)`,
            zIndex: 0,
            pointerEvents: 'none'
          }
        }}
        role="article"
        aria-label="Our Vision"
      >
        <Box sx={{ 
          height: { xs: '2px', md: '3px' }, 
          bgcolor: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)` 
        }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div custom={0} variants={contentVariants}>
            <motion.div whileHover="hover" variants={iconVariants}>
              <Box sx={{
                width: { xs: 44, sm: 48, md: 52, lg: 56, xl: 60 },
                height: { xs: 44, sm: 48, md: 52, lg: 56, xl: 60 },
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: theme.palette.mode === "dark" 
                  ? `${theme.palette.primary.main}20` 
                  : `${theme.palette.primary.main}10`,
                border: `2px solid ${theme.palette.primary.main}30`,
                mb: { xs: 2, md: 2.5 },
                boxShadow: theme.palette.mode === 'dark'
                  ? `0 4px 12px rgba(255, 255, 255, 0.1)`
                  : `0 4px 12px rgba(0, 0, 0, 0.1)`,
                transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  border: `2px solid ${theme.palette.primary.main}60`,
                  boxShadow: `0 6px 16px ${theme.palette.primary.main}40`
                }
              }}>
                <VisibilityIcon sx={{ fontSize: { xs: 28, sm: 32, md: 36, lg: 40, xl: 44 }, color: theme.palette.primary.main }} />
              </Box>
            </motion.div>
          </motion.div>
          <motion.div custom={1} variants={contentVariants}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '1.875rem', xl: '2rem' },
                color: theme.palette.text.primary,
                mb: { xs: 1.5, md: 2 },
                letterSpacing: '0.02em',
                textAlign: 'center',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Our Vision
            </Typography>
          </motion.div>
          <motion.div custom={2} variants={contentVariants}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem', lg: '0.9rem', xl: '1rem' },
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                textAlign: 'center',
                maxWidth: { xs: '90%', sm: '85%', md: '80%' }
              }}
            >
              To redefine construction estimation by innovating and integrating advanced technologies like BIM and VBM, becoming the go-to partner for unparalleled precision.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

export default OurVision;