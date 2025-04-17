import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import {
  Instagram,
  Facebook,
  LinkedIn,
  Email,
  Phone,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

// Animation variants for the footer container
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each section
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hover animation for links and icons
const hoverVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Styled components to apply theme-based styles
const StyledFooter = styled("footer")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: "3rem 2rem",
  position: "relative",
  borderTop: `2px solid ${theme.palette.primary.main}`, // Match Header's border
  boxShadow: theme.palette.mode === "dark"
    ? "0 -8px 20px rgba(255, 255, 255, 0.1)"
    : "0 -8px 20px rgba(0, 0, 0, 0.1)",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: theme.palette.mode === "dark"
      ? `radial-gradient(circle at 50% 100%, ${theme.palette.primary.main}20, transparent)`
      : `radial-gradient(circle at 50% 100%, ${theme.palette.primary.main}10, transparent)`,
    zIndex: 0,
    pointerEvents: "none",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledIcon = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledText = styled("p")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

function Footer() {
  const theme = useTheme();

  return (
    <StyledFooter
      as={motion.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="max-w-[90%] mx-auto px-4 md:px-8" style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-center">
          {/* Logo and Company Info */}
          <motion.div
            className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4"
            variants={sectionVariants}
          >
            <motion.img
              src={logo}
              alt="QTO House Logo"
              className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <StyledText className="text-xs md:text-sm lg:text-[12px] text-justify leading-relaxed">
                QTO House is a professional estimation and quantity take-off
                service provider. We assist our clients in simplifying the
                bidding process with accurate and timely estimates.
              </StyledText>
              <StyledText className="text-xs md:text-[8px] lg:text-[10px] mt-2">
                © 2024 QTO House. All rights reserved.
              </StyledText>
            </div>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={sectionVariants}
          >
            <h1
              className="text-sm md:text-xl lg:text-2xl font-semibold"
              style={{ color: theme.palette.primary.main }}
            >
              Contact Us
            </h1>
            <div className="flex flex-col space-y-2">
              <motion.div
                className="flex items-center"
                whileHover="hover"
                variants={hoverVariants}
              >
                <Email
                  fontSize="small"
                  style={{ color: theme.palette.primary.main, marginRight: "0.5rem" }}
                />
                <StyledText className="text-xs md:text-sm lg:text-lg">
                  info@qtohouse.com.pk
                </StyledText>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover="hover"
                variants={hoverVariants}
              >
                <Phone
                  style={{ color: theme.palette.primary.main, marginRight: "0.5rem" }}
                />
                <StyledText className="text-xs md:text-sm lg:text-lg">
                  (0341) 7861985 
                </StyledText>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={sectionVariants}
          >
            <h1
              className="text-sm md:text-xl lg:text-2xl font-semibold"
              style={{ color: theme.palette.primary.main }}
            >
              Follow Us
            </h1>
            <div className="flex space-x-4">
              <motion.div whileHover="hover" variants={hoverVariants}>
                <StyledIcon
                  href="https://www.instagram.com/qtohouse/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="text-3xl transition-all" />
                </StyledIcon>
              </motion.div>
              <motion.div whileHover="hover" variants={hoverVariants}>
                <StyledIcon
                  href="https://www.facebook.com/qtohouse/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="text-3xl transition-all" />
                </StyledIcon>
              </motion.div>
              <motion.div whileHover="hover" variants={hoverVariants}>
                <StyledIcon
                  href="https://pk.linkedin.com/company/qtohouse"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn className="text-3xl transition-all" />
                </StyledIcon>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={sectionVariants}
          >
            <h1
              className="text-sm md:text-xl lg:text-2xl font-semibold"
              style={{ color: theme.palette.primary.main }}
            >
              Quick Links
            </h1>
            <ul className="space-y-2 text-xs md:text-sm lg:text-lg">
              <div className="flex space-x-2">
                <motion.li whileHover="hover" variants={hoverVariants}>
                  <StyledLink to="/">Home</StyledLink>
                </motion.li>
                <motion.li whileHover="hover" variants={hoverVariants}>
                  <StyledLink to="/contact">Contact Us</StyledLink>
                </motion.li>
                <motion.li whileHover="hover" variants={hoverVariants}>
                  <StyledLink to="/about">About Us</StyledLink>
                </motion.li>
              </div>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-4"
          style={{ borderTop: `1px solid ${theme.palette.divider}` }}
          variants={sectionVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <StyledText>Estimation Made Simple with QTO House</StyledText>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.div whileHover="hover" variants={hoverVariants}>
                <StyledLink to="#">Privacy Policy</StyledLink>
              </motion.div>
              <motion.div whileHover="hover" variants={hoverVariants}>
                <StyledLink to="#">Terms of Service</StyledLink>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </StyledFooter>
  );
}

export default Footer;