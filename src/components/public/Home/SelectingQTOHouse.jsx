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
      className="w-full py-6 xs:py-8 sm:py-12 md:py-16 lg:py-24 px-5 xs:px-6 sm:px-6 md:px-8 lg:px-16 animate-on-scroll overflow-hidden"
      style={{ backgroundColor: theme.palette.background.default }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      id="about-section"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4 leading-tight"
              style={{ color: theme.palette.text.primary }}>
            <span className="relative inline-block">
              <span className="relative z-10">Why Choose QTO House?</span>
              <span className="absolute bottom-0 left-0 w-full h-2 xs:h-2 sm:h-3 -z-10 transform -rotate-1"
                    style={{ backgroundColor: theme.palette.primary.main + "30" }}></span>
            </span>
          </h2>
          <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-1 mx-auto mb-3 xs:mb-4 sm:mb-6"
               style={{ backgroundColor: theme.palette.primary.main }}></div>
        </motion.div>
        
        {/* Main Content: Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          <motion.div 
            className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1"
            variants={sectionVariants}
          >
            <motion.h3 
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative leading-tight"
              style={{ color: theme.palette.text.primary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Selecting QTO House: A Decision for Excellence
              <span className="absolute -bottom-1 xs:-bottom-1 sm:-bottom-2 left-0 w-12 xs:w-16 sm:w-20 h-1"
                    style={{ backgroundColor: theme.palette.primary.main }}></span>
            </motion.h3>
            
            <motion.p 
              className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed"
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
              className="relative w-full aspect-[4/3] xs:aspect-[16/9] sm:aspect-[16/9] overflow-hidden rounded-lg shadow-xl"
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
        
        {/* Features Grid */}
        <div className="mt-6 xs:mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 p-3 xs:p-4 sm:p-5 md:p-6 rounded-xl transition-colors duration-300"
              style={{
                backgroundColor: theme.palette.background.paper,
              }}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureVariants}
            >
              <div className="flex-shrink-0">
                <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: feature.color + "20" }}>
                  <feature.Icon style={{ color: feature.color, fontSize: '1rem xs:1.25rem sm:1.5rem md:1.75rem' }} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-1 xs:mb-1 sm:mb-2 leading-tight"
                    style={{ color: theme.palette.text.primary }}>{feature.title}</h3>
                <p className="text-xs xs:text-sm sm:text-base leading-relaxed"
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