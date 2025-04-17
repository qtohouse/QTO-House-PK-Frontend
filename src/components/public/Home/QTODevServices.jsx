import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaPalette, FaChartLine, FaServer } from "react-icons/fa";
import qtoDevLogo from "../../../assets/qtoDevLogo1.svg";

// Animation variants for the section
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants for the service items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const QTODevServices = () => {
  // Define the services offered by QTO Dev
  const services = [
    {
      title: "Web Development",
      icon: <FaGlobe className="text-2xl text-orange-500" />,
      description:
        "Custom, responsive websites tailored to your business needs.",
    },
    {
      title: "Graphic Designing",
      icon: <FaPalette className="text-2xl text-orange-500" />,
      description:
        "Brand identity, logos and graphic designing to make your brand standout.",
    },
    {
      title: "Digital Marketing",
      icon: <FaChartLine className="text-2xl text-orange-500" />,
      description:
        "Comprehensive marketing strategies to boost your online presence.",
    },
    {
      title: "IT Management",
      icon: <FaServer className="text-2xl text-orange-500" />,
      description: "Streamlined IT management to boost efficiency.",
    },
  ];

  return (
    <motion.section
      className="w-full py-16 bg-gradient-to-b from-gray-300 to-gray-100 text-white overflow-hidden relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"%3E%3Crect x="0" y="0" width="100" height="100" /%3E%3Cline x1="0" y1="0" x2="100" y2="100" /%3E%3Cline x1="0" y1="100" x2="100" y2="0" /%3E%3C/svg%3E')`,
        backgroundSize: "100px 100px",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo and Title */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
            <img
              src={qtoDevLogo}
              alt="QTO Dev Logo"
              className="h-40 md:h-50 relative z-10 mb-4"
            />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Leveraging Professional IT Services for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                Greater Success.
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg font-light max-w-2xl text-gray-300"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your trusted partner for innovative software solutions. We
            specialize in building cutting-edge technology to empower your
            business.
          </motion.p>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 w-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-5 rounded-xl shadow-lg border border-gray-100 hover:border-orange-400/50 transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 24px rgba(249, 115, 22, 0.15)",
                }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-50/0 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex items-center gap-3 mb-3">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100/80 text-orange-500 group-hover:bg-orange-200 transition-colors duration-300">
                    {service.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Button */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://qtodev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
              style={{ fontFamily: '"Poppins", sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Solutions
            </motion.a>
            <motion.a
              href="https://qtodev.com/contact"
              className="px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 font-bold rounded-xl hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
              style={{ fontFamily: '"Poppins", sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default QTODevServices;
