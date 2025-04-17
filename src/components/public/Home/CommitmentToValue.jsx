import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import Commercial from "../../../assets/comercial-Bo-I3e9G.avif";
import GavelIcon from "@mui/icons-material/Gavel";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: -30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6, 
      delay: 0.3 + (i * 0.15), 
      ease: "easeOut" 
    },
  }),
};

function CommitmentToValue() {
  const theme = useTheme();

  const features = [
    {
      title: "Forge Your Bid with Confidence",
      description: "Craft bids that stand distinguished in the competitive bidding arena with QTO House as your ally in estimation.",
      icon: <GavelIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Streamlined Estimating",
      description: "Redirect your energy to the projects that matter most. We handle the intricacies of estimating, ensuring timely, accurate, and detailed outcomes.",
      icon: <AccessTimeIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Precision Empowerment",
      description: "QTO House is your strategic partner, enhancing your estimates with the precision you need to win and manage contracts assertively.",
      icon: <PrecisionManufacturingIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Reliable Estimating Partners",
      description: "At QTO House, precision and diligence define our services, ensuring you receive comprehensive support for every bid.",
      icon: <ThumbUpIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      title: "Bid Better, Win More",
      description: "Harness our estimation expertise to craft compelling bids that secure your success in the cut-throat construction market.",
      icon: <EmojiEventsIcon fontSize="large" />,
      color: theme.palette.primary.main,
    },
  ];

  return (
    <motion.section
      className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-16 animate-on-scroll overflow-hidden"
      style={{ backgroundColor: theme.palette.background.default }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      id="commitment-section"
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
              <span className="relative z-10">Our Commitment to Value</span>
              <span className="absolute bottom-0 left-0 w-full h-3 -z-10 transform -rotate-1"
                    style={{ backgroundColor: theme.palette.primary.main + "30" }}></span>
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6"
               style={{ backgroundColor: theme.palette.primary.main }}></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-2xl"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.img
                src={Commercial}
                alt="Commercial Construction"
                loading="lazy"
                className="w-full h-auto object-cover rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-70"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={textVariants}
          >
            <motion.h3 
              className="text-xl md:text-2xl lg:text-3xl font-bold relative"
              style={{ color: theme.palette.text.primary }}
              whileInView={{ 
                opacity: [0, 1],
                y: [30, 0],
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Excellence in Every Estimate
              <span className="absolute -bottom-2 left-0 w-20 h-1"
                    style={{ backgroundColor: theme.palette.primary.main }}></span>
            </motion.h3>
            
            <motion.p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: theme.palette.text.secondary }}
              whileInView={{ 
                opacity: [0, 1],
                y: [30, 0],
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At QTO House, we deliver precision-driven quantity takeoff services and comprehensive construction estimating support to businesses across all construction domains and CSI categories. Our expertise is tailored to elevate your project planning and execution.
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: theme.palette.text.secondary }}
              whileInView={{ 
                opacity: [0, 1],
                y: [30, 0],
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We partner with contractors, subcontractors, and construction firms of all sizes to provide accurate, detailed estimates that help secure profitable projects and ensure successful execution.
            </motion.p>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4"
              style={{ 
                backgroundColor: theme.palette.background.paper,
                borderColor: feature.color 
              }}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col space-y-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: theme.palette.primary.main + "20" }}>
                  {React.cloneElement(feature.icon, { 
                    style: { color: feature.color, fontSize: '1.75rem' } 
                  })}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold"
                      style={{ color: theme.palette.text.primary }}>{feature.title}</h3>
                  <p className="leading-relaxed"
                     style={{ color: theme.palette.text.secondary }}>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default CommitmentToValue;