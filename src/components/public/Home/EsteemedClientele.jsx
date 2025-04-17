import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConstructionIcon from "@mui/icons-material/Construction";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
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
      staggerChildren: 0.1 
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

const clientVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

function EsteemedClientele() {
  const theme = useTheme();
  const navigate = useNavigate();

  const clients = [
    { 
      id: 1, 
      title: "General Contractors", 
      icon: <BusinessIcon />,
      description: "Construction firms that manage and oversee building projects"
    },
    { 
      id: 2, 
      title: "Remodeling Contractors", 
      icon: <HomeWorkIcon />,
      description: "Specialists in renovation and improvement projects"
    },
    { 
      id: 3, 
      title: "Architects", 
      icon: <ArchitectureIcon />,
      description: "Design professionals who plan and create building blueprints"
    },
    { 
      id: 4, 
      title: "Designers", 
      icon: <DesignServicesIcon />,
      description: "Creative professionals who enhance aesthetics and functionality"
    },
    { 
      id: 5, 
      title: "Subcontractors", 
      icon: <ConstructionIcon />,
      description: "Specialized trade professionals working on specific project aspects"
    },
    { 
      id: 6, 
      title: "Material Suppliers", 
      icon: <Inventory2Icon />,
      description: "Providers of construction materials and equipment"
    },
    { 
      id: 7, 
      title: "Homeowners", 
      icon: <HomeIcon />,
      description: "Individuals seeking professional services for personal property"
    },
    { 
      id: 8, 
      title: "Developers", 
      icon: <ApartmentIcon />,
      description: "Companies that invest in and develop real estate projects"
    },
  ];

  return (
    <motion.section
      className="animate-on-scroll py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: theme.palette.background.default }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      id="clients-section"
    >
      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          variants={titleVariants}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: theme.palette.text.primary }}>
            Our Esteemed Clientele
          </h2>
          <div className="w-24 h-1 mx-auto mb-6"
               style={{ backgroundColor: theme.palette.primary.main }}></div>
          <p className="text-base md:text-lg leading-relaxed"
             style={{ color: theme.palette.text.secondary }}>
            QTO House proudly serves a diverse range of clients in the construction industry, from general contractors to homeowners, ensuring each project is treated with unparalleled professionalism.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2 md:px-4"
          variants={sectionVariants}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className="rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
              style={{ 
                backgroundColor: theme.palette.background.paper,
                backdropFilter: "blur(5px)"
              }}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              variants={clientVariants}
            >
              <div className="h-2"
                   style={{ backgroundColor: theme.palette.primary.main }}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                         style={{ 
                           backgroundColor: theme.palette.primary.main + "20"
                         }}>
                      {React.cloneElement(client.icon, { 
                        style: { 
                          color: theme.palette.primary.main, 
                          fontSize: '1.75rem' 
                        } 
                      })}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold"
                      style={{ color: theme.palette.text.primary }}>{client.title}</h3>
                </div>
                <p className="text-sm leading-relaxed"
                   style={{ color: theme.palette.text.secondary }}>{client.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
          style={{
            backgroundColor: theme.palette.background.paper,
            backdropFilter: "blur(5px)"
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2"
                  style={{ color: theme.palette.text.primary }}>
                Ready to experience premium service?
              </h3>
              <p className="leading-relaxed"
                 style={{ color: theme.palette.text.secondary }}>
                Join our growing list of satisfied clients today.
              </p>
            </div>
            <div className="flex justify-center md:justify-end gap-4">
              <Button
                variant="dark"
                size="medium"
                onClick={() => navigate("/contact")}
                className="shadow-lg"
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default EsteemedClientele;