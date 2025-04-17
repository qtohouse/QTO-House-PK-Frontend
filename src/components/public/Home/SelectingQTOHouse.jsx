import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import enhancedImage from "../../../assets/selectingQtoHouse.avif";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    } 
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.15,
      ease: "easeOut" 
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

function SelectingQTOHouse() {
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Seasoned Industry Experts",
      description: "Our estimators bring decades of field experience, providing insights that transcend conventional estimation.",
      Icon: PersonIcon,
      color: theme.palette.primary.main,
    },
    {
      title: "Comprehensive Project Analysis",
      description: "We delve deep, translating project intricacies into actionable, crystal-clear estimates.",
      Icon: AssessmentIcon,
      color: theme.palette.primary.main,
    },
    {
      title: "Technological Precision",
      description: "Leveraging modern tech to refine estimation precision beyond traditional methods.",
      Icon: PrecisionManufacturingIcon,
      color: theme.palette.primary.main,
    },
    {
      title: "Pricing with Perspective",
      description: "At QTO House, value meets virtue - offering cost-efficient solutions without skimping on precision.",
      Icon: MonetizationOnIcon,
      color: theme.palette.primary.main,
    },
  ];

  return (
    <motion.section
      className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-16 animate-on-scroll overflow-hidden"
      style={{ backgroundColor: theme.palette.background.paper }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      id="about-section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: theme.palette.text.primary }}>
            <span className="relative inline-block">
              <span className="relative z-10">Why Choose QTO House?</span>
              <span className="absolute bottom-0 left-0 w-full h-3 -z-10 transform -rotate-1"
                    style={{ backgroundColor: theme.palette.primary.main + "30" }}></span>
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6"
               style={{ backgroundColor: theme.palette.primary.main }}></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            className="space-y-6 order-2 lg:order-1"
            variants={sectionVariants}
          >
            <motion.h3 
              className="text-xl md:text-2xl lg:text-3xl font-bold relative"
              style={{ color: theme.palette.text.primary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Selecting QTO House: A Decision for Excellence
              <span className="absolute -bottom-2 left-0 w-20 h-1"
                    style={{ backgroundColor: theme.palette.primary.main }}></span>
            </motion.h3>
            
            <motion.p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: theme.palette.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join hands with QTO House, where we blend a decade of professional expertise with a personal touch for each project. Our certified estimators are champions of accuracy, delivering results that resonate with the cost and quality your projects deserve.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="w-full order-1 lg:order-2"
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={enhancedImage}
                alt="Professional construction estimation team"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 rounded-lg"></div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-5 p-6 rounded-xl transition-colors duration-300"
              style={{
                backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.default : "transparent",
                "&:hover": { backgroundColor: theme.palette.background.default }
              }}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: feature.color + "20" }}>
                  <feature.Icon style={{ color: feature.color, fontSize: '1.75rem' }} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2"
                    style={{ color: theme.palette.text.primary }}>{feature.title}</h3>
                <p className="leading-relaxed"
                   style={{ color: theme.palette.text.secondary }}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SelectingQTOHouse;