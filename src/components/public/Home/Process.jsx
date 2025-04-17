import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { 
  Assessment, 
  Description, 
  BuildCircle, 
  InsertDriveFile, 
  Send, 
  RequestQuote, 
  Payment, 
  CheckCircle,
  ArrowDownward 
} from "@mui/icons-material";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";

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

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const flowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3 + (i * 0.2), ease: "easeOut" },
  }),
  hover: {
    y: -10,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const arrowVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
      ease: "easeInOut"
    }
  }
};

function Process() {
  const theme = useTheme();
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "In-Depth Plan Analysis",
      description: "Detailed review of project plans to identify all components necessary for a successful build.",
      icon: <Description />,
      color: theme.palette.primary.main,
    },
    {
      id: 2,
      title: "Efficient Quantity Takeoff",
      description: "Utilizing advanced software to generate precise material lists and costings.",
      icon: <Assessment />,
      color: theme.palette.primary.main,
    },
    {
      id: 3,
      title: "Comprehensive Project Overview",
      description: "Aggregation of all data into an accessible format, offering a clear project trajectory.",
      icon: <BuildCircle />,
      color: theme.palette.primary.main,
    },
    {
      id: 4,
      title: "Detailed Takeoff Deliverables",
      description: "Tailored reports that outline the project scope comprehensively, with all data clearly presented for client review.",
      icon: <InsertDriveFile />,
      color: theme.palette.primary.main,
    },
  ];

  const flowSteps = [
    { 
      id: 1, 
      title: "Submit Your Plans", 
      description: "Upload or email your project plans to us for review", 
      icon: <Send />,
      bgColor: theme.palette.background.paper,
    },
    { 
      id: 2, 
      title: "Receive Quotation", 
      description: "We'll evaluate the project and send you a detailed quote", 
      icon: <RequestQuote />,
      bgColor: theme.palette.background.paper,
    },
    { 
      id: 3, 
      title: "Make Payment", 
      description: "Secure payment options for your convenience", 
      icon: <Payment />,
      bgColor: theme.palette.background.paper,
    },
    { 
      id: 4, 
      title: "Get Your Estimates", 
      description: "Receive comprehensive, accurate project estimates", 
      icon: <CheckCircle />,
      bgColor: theme.palette.background.paper,
    },
  ];

  return (
    <motion.section
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 animate-on-scroll overflow-hidden"
      style={{ backgroundColor: theme.palette.background.default }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      id="process-section"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={titleVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: theme.palette.text.primary }}>
            <span className="relative inline-block">
              <span className="relative z-10">Our Streamlined Process</span>
              <span className="absolute bottom-0 left-0 w-full h-2 sm:h-3 -z-10 transform -rotate-1"
                    style={{ backgroundColor: theme.palette.primary.main + "30" }}></span>
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto mb-4 sm:mb-6"
               style={{ backgroundColor: theme.palette.primary.main }}></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
             style={{ color: theme.palette.text.secondary }}>
            Our methodical approach to construction takeoff and estimation ensures accurate, comprehensive project oversight from start to finish.
          </p>
        </motion.div>
        
        {/* Main Content: Steps and Flow */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16 space-y-8 lg:space-y-0">
          {/* Steps Section */}
          <motion.div 
            className="flex flex-col space-y-6 sm:space-y-8 lg:w-1/2"
            variants={sectionVariants}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold relative"
                style={{ color: theme.palette.text.primary }}>
              Our Expertise at Work
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-12 sm:w-16 h-1"
                    style={{ backgroundColor: theme.palette.primary.main }}></span>
            </h3>
            
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="flex items-start space-x-3 sm:space-x-5 p-4 sm:p-6 rounded-lg shadow-md transition-shadow"
                style={{ backgroundColor: theme.palette.background.paper }}
                custom={step.id - 1}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={stepVariants}
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: step.color + "20" }}
                  >
                    {React.cloneElement(step.icon, { style: { color: step.color, fontSize: '1.5rem sm:1.75rem md:2rem' } })}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 flex items-center"
                      style={{ color: theme.palette.text.primary }}>
                    <span className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 text-white rounded-full text-sm sm:text-base font-bold mr-2 sm:mr-3"
                          style={{ backgroundColor: theme.palette.primary.main }}>
                      {step.id}
                    </span>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-base leading-relaxed"
                     style={{ color: theme.palette.text.secondary }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Flow Section */}
          <motion.div 
            className="lg:w-1/2 flex flex-col"
            variants={sectionVariants}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 relative"
                style={{ color: theme.palette.text.primary }}>
              Getting Started is Easy
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-12 sm:w-16 h-1"
                    style={{ backgroundColor: theme.palette.primary.main }}></span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {flowSteps.map((flow, index) => (
                <div key={flow.id} className="flex flex-col">
                  <motion.div
                    className="flex flex-col justify-center items-center space-y-3 sm:space-y-4 rounded-xl p-4 sm:p-6 shadow-lg h-full border border-transparent hover:border-gray-300"
                    style={{ 
                      backgroundColor: flow.bgColor,
                      backdropFilter: "blur(5px)"
                    }}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={flowVariants}
                  >
                    <div className="p-2 sm:p-3 rounded-full mb-1 sm:mb-2 border border-gray-300"
                         style={{ backgroundColor: theme.palette.background.default + "20" }}>
                      {React.cloneElement(flow.icon, { 
                        style: { fontSize: '1.75rem sm:2rem md:2.5rem', color: theme.palette.primary.main }
                      })}
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                      <div className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 rounded-full text-sm sm:text-base font-bold"
                           style={{
                             backgroundColor: theme.palette.secondary.main,
                             color: theme.palette.primary.contrastText
                           }}>
                        {flow.id}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
                          style={{ color: theme.palette.text.primary }}>
                        {flow.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-center"
                       style={{ color: theme.palette.text.secondary }}>
                      {flow.description}
                    </p>
                  </motion.div>
                  
                  {index < flowSteps.length - 1 && (
                    <div className="flex justify-center my-2 sm:my-4 sm:hidden">
                      <motion.div
                        variants={arrowVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <ArrowDownward style={{ color: theme.palette.primary.main, fontSize: '1.5rem sm:2rem' }} />
                      </motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <motion.div
              className="mt-6 sm:mt-8 md:mt-12 p-4 sm:p-6 rounded-lg shadow-md border-l-4"
              style={{
                backgroundColor: theme.palette.background.paper,
                backdropFilter: "blur(5px)",
                borderColor: theme.palette.primary.main
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3"
                  style={{ color: theme.palette.text.primary }}>Ready to get started?</h4>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4"
                 style={{ color: theme.palette.text.secondary }}>
                Contact us today to discuss your project requirements and discover how our estimation services can help you succeed.
              </p>
              <Button
                variant="dark"
                size="medium"
                onClick={() => navigate("/contact")}
                className="shadow-lg px-4 sm:px-6 py-2 sm:py-3 hover:bg-opacity-90 transition-colors text-xs sm:text-sm md:text-base"
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  borderRadius: '8px'
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Process;