import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SyncIcon from "@mui/icons-material/Sync";
import HandshakeIcon from "@mui/icons-material/Handshake";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.15, ease: "easeOut" },
  }),
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

const iconVariants = {
  hover: {
    rotate: 15,
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

function CoreValue() {
  const theme = useTheme();

  return (
    <Box sx={{
      width: '100%',
      py: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
      px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
      bgcolor: theme.palette.background.paper,
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: theme.palette.mode === 'dark'
          ? `radial-gradient(circle at 50% 10%, ${theme.palette.primary.main}20, transparent)`
          : `radial-gradient(circle at 50% 10%, ${theme.palette.primary.main}10, transparent)`,
        zIndex: 0,
        pointerEvents: 'none'
      }
    }}>
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <motion.div variants={titleVariants}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
              color: theme.palette.text.primary,
              mb: { xs: 1, sm: 1.5 },
              letterSpacing: '0.02em',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            role="heading"
            aria-level="2"
          >
            Our Core Values
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.125rem' },
              color: theme.palette.text.secondary,
              maxWidth: { xs: '90%', sm: '80%', md: '600px', lg: '700px' },
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            The Pillars of Our Commitment to High-Quality Preconstruction Estimates and Services
          </Typography>
        </motion.div>
      </motion.div>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: '1fr 1fr', 
          md: '1fr 1fr 1fr', 
          lg: '1fr 1fr 1fr 1fr', 
          xl: '1fr 1fr 1fr 1fr' 
        },
        gap: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        position: 'relative',
        zIndex: 1
      }}>
        {[
          {
            title: "Precision",
            description: "Delivering accurate and detailed estimates to ensure your project’s success.",
            icon: <PrecisionManufacturingIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
          {
            title: "Collaboration",
            description: "Partnering with you to provide meticulous and competitive estimates.",
            icon: <GroupWorkIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
          {
            title: "Efficiency",
            description: "Streamlining processes to maximize efficiency and reduce hassles.",
            icon: <AssignmentTurnedInIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
          {
            title: "Discipline",
            description: "Committed to systematic practices for reliable project estimates.",
            icon: <BuildIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
          {
            title: "Accountability",
            description: "Upholding integrity and transparency in every estimate we provide.",
            icon: <VerifiedIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
          {
            title: "Transparency",
            description: "Fostering trust through open and honest communication.",
            icon: <VisibilityIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
          {
            title: "Alignment",
            description: "Tailoring estimates to align perfectly with your project goals.",
            icon: <SyncIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
          {
            title: "Responsibility",
            description: "Prioritizing ethical practices and sustainability for all stakeholders.",
            icon: <HandshakeIcon sx={{ 
              fontSize: { xs: 36, sm: 40, md: 44, lg: 48, xl: 50 }, 
              color: theme.palette.primary.main 
            }} />,
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
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
                transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: { xs: 2, sm: 3, md: 4, lg: 4, xl: 5 },
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
              aria-label={`Core Value: ${value.title}`}
            >
              <Box sx={{ 
                height: { xs: '2px', md: '3px' }, 
                width: '100%',
                bgcolor: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)` 
              }} />
              <Box sx={{ p: { xs: 2, sm: 3, md: 3, lg: 4, xl: 4 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div whileHover="hover" variants={iconVariants}>
                  <Box sx={{ 
                    mb: { xs: 1.5, md: 2 },
                    width: { xs: 40, sm: 44, md: 48, lg: 52, xl: 56 },
                    height: { xs: 40, sm: 44, md: 48, lg: 52, xl: 56 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: theme.palette.mode === "dark" 
                      ? `${theme.palette.primary.main}20` 
                      : `${theme.palette.primary.main}10`,
                    border: `2px solid ${theme.palette.primary.main}30`,
                    boxShadow: theme.palette.mode === 'dark'
                      ? `0 4px 12px rgba(255, 255, 255, 0.1)`
                      : `0 4px 12px rgba(0, 0, 0, 0.1)`,
                    transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      border: `2px solid ${theme.palette.primary.main}60`,
                      boxShadow: `0 6px 16px ${theme.palette.primary.main}40`
                    }
                  }}>
                    {value.icon}
                  </Box>
                </motion.div>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.375rem' },
                    color: theme.palette.text.primary,
                    mb: { xs: 1, md: 1.5 },
                    letterSpacing: '0.01em',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem', lg: '0.9rem', xl: '1rem' },
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  {value.description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

export default CoreValue;