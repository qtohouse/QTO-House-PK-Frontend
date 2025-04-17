import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from "../../assets/logo.svg";
import {
  Instagram,
  Facebook,
  LinkedIn,
  Email,
  Phone,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles"; // Import useTheme for accessing theme
import { styled } from "@mui/material/styles"; // Import styled for custom styling

// Animation variants for the footer container
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger the children animations
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
  backgroundColor: theme.palette.background.default, // Use theme background
  color: theme.palette.text.primary, // Use theme text color
  padding: "3rem 2rem",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary, // Use theme text color
  "&:hover": {
    color: theme.palette.primary.main, // Use theme primary color on hover
  },
}));

const StyledIcon = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary, // Use theme secondary text color
  "&:hover": {
    color: theme.palette.primary.main, // Use theme primary color on hover
  },
}));

const StyledText = styled("p")(({ theme }) => ({
  color: theme.palette.text.secondary, // Use theme secondary text color
}));

function Footer() {
  const theme = useTheme(); // Access the current theme

  return (
    <StyledFooter
      as={motion.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the footer is in view
      variants={footerVariants}
    >
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-center">
          {/* Logo and Company Info */}
          <motion.div
            className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4"
            variants={sectionVariants}
          >
            <motion.img
              src={logo}
              alt="logo"
              className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]"
              whileHover={{ scale: 1.05 }} // Subtle scale on hover
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
              style={{ color: theme.palette.primary.main }} // Use theme primary color
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
                  info@qtohouse.com
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
                  (571)-748-4366
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
              style={{ color: theme.palette.primary.main }} // Use theme primary color
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
              style={{ color: theme.palette.primary.main }} // Use theme primary color
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
          style={{ borderTop: `1px solid ${theme.palette.divider}` }} // Use theme divider color
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