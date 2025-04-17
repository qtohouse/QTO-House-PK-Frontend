import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import CalculateIcon from "@mui/icons-material/Calculate";
import SearchIcon from "@mui/icons-material/Search";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";

import concreteImg from "../../../assets/concrete-1-yz21YsVT.avif";
import masonryImg from "../../../assets/masonry-2-_99_al9N.avif";
import drywallImg from "../../../assets/drywall-1-CgtIqj6N.avif";
import lumberImg from "../../../assets/lumber-1-DgfBTg1H.avif";
import paintImg from "../../../assets/paint-1-IOzVecRz.avif";
import earthworkImg from "../../../assets/earth-1-C01dx2SN.avif";
import flooringImg from "../../../assets/Flooring-1-DdhhxQkj (1).avif";
import electricalImg from "../../../assets/electric-1-8Vi2UXCs.avif";
import plumbingImg from "../../../assets/plumbing-COxsLeYx.avif";
import furnishingsImg from "../../../assets/Furnishings-CvwLr-Im.avif";
import metalsImg from "../../../assets/metal-C2_s8JYv.avif";
import exteriorImg from "../../../assets/exterior-BnPuiA-G.avif";
import mechanicalImg from "../../../assets/mechanical-B8YzkeG0 (1).avif";
import fireSuppressionImg from "../../../assets/fire-7imCMEks (1).avif";
import hvacImg from "../../../assets/hvac-VnCzjprq.avif";
import finishesImg from "../../../assets/finishes-B6XV5YIE.avif";
import utilitiesImg from "../../../assets/utilities-DF28iGbL (1).avif";
import roofingImg from "../../../assets/Roofing-Dyn9r6NE.avif";
import demolitionImg from "../../../assets/Demolition-BziyAGjL.avif";

// Service categories organized by type
const serviceCategories = [
  {
    id: "commercial",
    name: "Commercial",
    description: "Comprehensive takeoffs for office buildings, retail spaces, hotels and more",
    icon: <CalculateIcon />,
    services: [
      { id: 1, name: "Concrete", imgSrc: concreteImg, description: "Foundations, slabs, columns, beams" },
      { id: 13, name: "Mechanical", imgSrc: mechanicalImg, description: "Building systems and equipment" },
      { id: 8, name: "Electrical", imgSrc: electricalImg, description: "Wiring, lighting, power systems" },
      { id: 9, name: "Plumbing", imgSrc: plumbingImg, description: "Water supply and drainage systems" },
    ],
  },
  {
    id: "residential",
    name: "Residential",
    description: "Detailed estimating for single-family homes, apartments, and multi-family complexes",
    icon: <SearchIcon />,
    services: [
      { id: 2, name: "Masonry", imgSrc: masonryImg, description: "Brick, stone, and block construction" },
      { id: 3, name: "Drywall", imgSrc: drywallImg, description: "Interior wall systems and finishes" },
      { id: 5, name: "Paint", imgSrc: paintImg, description: "Interior and exterior finishes" },
      { id: 4, name: "Lumber", imgSrc: lumberImg, description: "Framing and structural wood elements" },
    ],
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Specialized takeoffs for factories, warehouses, and manufacturing facilities",
    icon: <SpeedIcon />,
    services: [
      { id: 11, name: "Metals", imgSrc: metalsImg, description: "Structural steel and metal fabrication" },
      { id: 14, name: "Fire Suppression", imgSrc: fireSuppressionImg, description: "Safety systems and protection" },
      { id: 15, name: "HVAC", imgSrc: hvacImg, description: "Climate control and ventilation" },
      { id: 17, name: "Utilities", imgSrc: utilitiesImg, description: "Site and building utility systems" },
    ],
  },
  {
    id: "civil",
    name: "Civil & Infrastructure",
    description: "Precise estimates for roads, bridges, tunnels, and infrastructure projects",
    icon: <TimelineIcon />,
    services: [
      { id: 6, name: "Earthwork", imgSrc: earthworkImg, description: "Excavation, grading, and site prep" },
      { id: 18, name: "Roofing", imgSrc: roofingImg, description: "Waterproofing and roof systems" },
      { id: 12, name: "Exterior", imgSrc: exteriorImg, description: "Building envelope components" },
      { id: 19, name: "Demolition", imgSrc: demolitionImg, description: "Structure removal and site clearing" },
    ],
  },
];

// Additional specialized services
const specializedServices = [
  { id: 7, name: "Flooring", imgSrc: flooringImg, description: "All flooring types and finishes" },
  { id: 10, name: "Furnishings", imgSrc: furnishingsImg, description: "Fixed and movable furnishings" },
  { id: 16, name: "Finishes", imgSrc: finishesImg, description: "Interior and exterior finishes" },
];

function TakeoffServices() {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("commercial");
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (isMobile) {
      const element = document.getElementById(`services-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${theme.palette.background.default}, ${theme.palette.background.paper})`
      }}
      id="services-section"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#FBBF24_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: theme.palette.text.primary }}>
            <span className="relative inline-block">
              Our Takeoff Services
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                    style={{ backgroundColor: theme.palette.primary.main }}></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed"
             style={{ color: theme.palette.text.secondary }}>
            Explore precise quantity takeoffs and cost estimates for all construction disciplines.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`relative px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md`}
              style={{
                backgroundColor: activeCategory === category.id ? theme.palette.primary.main : theme.palette.background.paper,
                color: activeCategory === category.id ? theme.palette.text.primary : theme.palette.text.primary,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <span style={{ color: activeCategory === category.id ? theme.palette.text.primary : theme.palette.primary.main }}>
                {category.icon}
              </span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <div className="mb-16">
          <AnimatePresence mode="wait">
            {!isMobile && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8"
              >
                <div className="lg:col-span-2">
                  <motion.div
                    className="rounded-2xl shadow-lg p-8 h-full flex flex-col"
                    style={{
                      background: `linear-gradient(to bottom right, ${theme.palette.background.paper}, ${theme.palette.background.default})`
                    }}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-sm"
                         style={{ backgroundColor: theme.palette.primary.main + "20" }}>
                      <span style={{ color: theme.palette.primary.main, fontSize: '2rem' }}>
                        {serviceCategories.find((c) => c.id === activeCategory)?.icon}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: theme.palette.text.primary }}>
                      {serviceCategories.find((c) => c.id === activeCategory)?.name} Construction
                    </h3>

                    <p className="mb-6 flex-grow text-lg leading-relaxed"
                       style={{ color: theme.palette.text.secondary }}>
                      {serviceCategories.find((c) => c.id === activeCategory)?.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-xl"
                          style={{ color: theme.palette.text.primary }}>Our Deliverables:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span style={{ color: theme.palette.primary.main, marginRight: '12px', fontSize: '1.25rem' }}>✓</span>
                          <span style={{ color: theme.palette.text.secondary }}>Detailed material quantities</span>
                        </li>
                        <li className="flex items-start">
                          <span style={{ color: theme.palette.primary.main, marginRight: '12px', fontSize: '1.25rem' }}>✓</span>
                          <span style={{ color: theme.palette.text.secondary }}>Accurate cost estimations</span>
                        </li>
                        <li className="flex items-start">
                          <span style={{ color: theme.palette.primary.main, marginRight: '12px', fontSize: '1.25rem' }}>✓</span>
                          <span style={{ color: theme.palette.text.secondary }}>Professional reporting</span>
                        </li>
                        <li className="flex items-start">
                          <span style={{ color: theme.palette.primary.main, marginRight: '12px', fontSize: '1.25rem' }}>✓</span>
                          <span style={{ color: theme.palette.text.secondary }}>Bid preparation support</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-3">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories
                      .find((c) => c.id === activeCategory)
                      ?.services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          className="rounded-xl shadow-lg overflow-hidden group"
                          style={{ backgroundColor: theme.palette.background.paper }}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                          whileHover={{
                            y: -5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <div className="relative h-48 overflow-hidden">
                            <motion.img
                              src={service.imgSrc}
                              alt={service.name}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-white font-bold text-xl">{service.name}</h3>
                              <div className="w-8 h-1 my-2 transform origin-left transition-all duration-300 group-hover:w-12"
                                   style={{ backgroundColor: theme.palette.primary.main }}></div>
                            </div>
                          </div>

                          <div className="p-4">
                            <p style={{ color: theme.palette.text.secondary }}>{service.description}</p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isMobile && (
            <div className="space-y-12">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  id={`services-${category.id}`}
                  className={`scroll-mt-20 ${category.id !== activeCategory ? "opacity-70" : ""}`}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4`}
                      style={{
                        backgroundColor: category.id === activeCategory ? theme.palette.primary.main : theme.palette.text.secondary
                      }}
                    >
                      <span style={{ color: category.id === activeCategory ? theme.palette.text.primary : theme.palette.background.paper }}>
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold"
                        style={{ color: theme.palette.text.primary }}>{category.name} Construction</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={service.id}
                        className="rounded-lg shadow-md overflow-hidden flex"
                        style={{ backgroundColor: theme.palette.background.paper }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <div className="w-1/3 relative">
                          <img src={service.imgSrc} alt={service.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="w-2/3 p-4">
                          <h4 className="font-bold text-lg"
                              style={{ color: theme.palette.text.primary }}>{service.name}</h4>
                          <div className="w-8 h-1 my-2"
                               style={{ backgroundColor: theme.palette.primary.main }}></div>
                          <p style={{ color: theme.palette.text.secondary }}>{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-10">
            <div className="h-px flex-grow"
                 style={{ backgroundColor: theme.palette.text.secondary }}></div>
            <h3 className="text-2xl md:text-3xl font-bold px-6"
                style={{ color: theme.palette.text.primary }}>Specialized Services</h3>
            <div className="h-px flex-grow"
                 style={{ backgroundColor: theme.palette.text.secondary }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="perspective-1000"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ z: 10 }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  className="relative rounded-xl shadow-lg overflow-hidden h-72 transform-style-3d"
                  style={{ backgroundColor: theme.palette.background.paper }}
                  animate={{
                    rotateX: hovered === service.id ? 5 : 0,
                    rotateY: hovered === service.id ? 5 : 0,
                    z: hovered === service.id ? 20 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 z-0">
                    <img src={service.imgSrc} alt={service.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform-style-3d">
                    <motion.div
                      animate={{
                        y: hovered === service.id ? -5 : 0,
                        z: hovered === service.id ? 10 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-12 h-1 mb-3"
                           style={{ backgroundColor: theme.palette.primary.main }}></div>
                      <h3 className="text-white font-bold text-xl mb-2">{service.name}</h3>
                      <p className="text-gray-200 text-base">{service.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default TakeoffServices;