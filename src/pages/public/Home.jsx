import React, { Suspense, useEffect, useState, Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { IconButton, Snackbar, Alert, Typography, Divider } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ci1 from "../../assets/background.avif";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Button from "../../components/common/Button";
import SectionLoader from "../../components/common/SectionLoader";
import { darkTheme, lightTheme } from "../../theme";

// Lazy-loaded child components
const SelectingQTOHouse = React.lazy(() => import("../../components/public/Home/SelectingQTOHouse"));
const CommitmentToValue = React.lazy(() => import("../../components/public/Home/CommitmentToValue"));
const TakeoffServices = React.lazy(() => import("../../components/public/Home/TakeoffServices"));
const Process = React.lazy(() => import("../../components/public/Home/Process"));
const EsteemedClientele = React.lazy(() => import("../../components/public/Home/EsteemedClientele"));

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in child component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
          <h2>Something went wrong while rendering this section.</h2>
          <p>{this.state.error?.message || "Unknown error"}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2 + custom * 0.1,
      ease: "easeOut",
    },
  }),
};

function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("showPopup") === "true") {
      setShowPopup(true);
      localStorage.removeItem("showPopup");
    }
  }, []);

  const handleClosePopup = (event, reason) => {
    if (reason === "clickaway") return;
    setShowPopup(false);
  };

  const countUpProps = {
    start: 0,
    duration: 2.5,
    separator: ",",
    useEasing: true,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
  };

  // Log when the image fails to load
  const handleImageError = (e) => {
    console.error("Failed to load hero image:", e);
    e.target.src = "https://via.placeholder.com/1200x600?text=Hero+Image+Failed+to+Load"; // Fallback image
  };

  return (
    <div className="relative w-full flex flex-col" style={{ backgroundColor: theme.palette.background.default }}>
      {/* Hero Section */}
      <motion.div
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.img
          src={ci1}
          alt="Construction Image"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          onError={handleImageError}
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{ backgroundColor: theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)" }}
          variants={heroVariants}
        >
          <motion.div
            className="flex flex-col items-center w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-center space-y-4 sm:space-y-5 md:space-y-6"
            variants={heroVariants}
          >
            <Typography 
                  variant="h2" 
                  component="h1" 
                  sx={{ 
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem', xl: '2.75rem' },
                    textAlign: 'center',
                    marginBottom: { xs: 1, md: 1.5 },
                    letterSpacing: '0.02em',
                    textShadow: `0px 3px 5px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.3)'}`,
                    wordBreak: 'break-word',
                    lineHeight: 1.2,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  role="heading"
                  aria-level="1"
                >
                  Welcome to QTO House
                </Typography>
                <Divider sx={{ 
                  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`, 
                  height: { xs: '2px', md: '3px' },
                  width: { xs: '120px', sm: '150px', md: '180px', lg: '200px', xl: '220px' },
                  margin: '0 auto', 
                  marginBottom: { xs: 1.5, md: 2 }
                }} />
            <motion.p
              className="text-xs sm:text-sm md:text-lg lg:text-2xl font-light leading-relaxed px-4"
              style={{
                color: 'white',
                fontFamily: '"Montserrat", sans-serif',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              "Mastering the Art of Accurate Construction Estimates & Detailed Quantity Take-Offs, On Schedule & Within Your Financial Blueprint"
            </motion.p>
          </motion.div>
          <motion.div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-2xl mt-4 sm:mt-6 md:mt-8 mx-auto"
            style={{
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.divider,
              borderWidth: 1,
              borderStyle: "solid",
            }}
            variants={statsVariants}
          >
            <div
              className="flex flex-wrap items-center justify-around text-center space-y-4 sm:space-y-0 py-3 sm:py-4 border-t-2 border-b-2"
              style={{ borderColor: theme.palette.primary.main }}
            >
              <motion.div
                className="flex flex-col items-center w-1/2 sm:w-1/5 mt-3 sm:mt-0 group"
                variants={statItemVariants}
                custom={0}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <DescriptionIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
                    transition: "transform 0.3s ease",
                  }}
                  className="group-hover:animate-pulse"
                />
                <p
                  className="mt-2 text-xs sm:text-xs md:text-sm font-semibold"
                  style={{ color: theme.palette.text.secondary }}
                >
                  Available
                </p>
                <p
                  className="mt-1 text-sm sm:text-base md:text-lg lg:text-2xl font-bold"
                  style={{ color: theme.palette.text.primary }}
                >
                  <CountUp {...countUpProps} end={193} />
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center w-1/2 sm:w-1/5 group"
                variants={statItemVariants}
                custom={1}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <HourglassEmptyIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
                  }}
                  className="group-hover:animate-pulse"
                />
                <p
                  className="mt-2 text-xs sm:text-xs md:text-sm font-semibold"
                  style={{ color: theme.palette.text.secondary }}
                >
                  In Progress
                </p>
                <p
                  className="mt-1 text-sm sm:text-base md:text-lg lg:text-2xl font-bold"
                  style={{ color: theme.palette.text.primary }}
                >
                  <CountUp {...countUpProps} end={78} />
                </p>
              </motion.div>

              <motion.div
                className="w-full sm:w-1/5 flex justify-center items-center"
                variants={statItemVariants}
                custom={2}
              >
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => navigate("/sample")}
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: "bold",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  className="uppercase text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all"
                >
                  Get Free Sample
                </Button>
              </motion.div>

              <motion.div
                className="flex flex-col items-center w-1/2 sm:w-1/5 group"
                variants={statItemVariants}
                custom={3}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <CheckCircleOutlineIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
                  }}
                  className="group-hover:animate-pulse"
                />
                <p
                  className="mt-2 text-xs sm:text-xs md:text-sm font-semibold"
                  style={{ color: theme.palette.text.secondary }}
                >
                  Bid Results
                </p>
                <p
                  className="mt-1 text-sm sm:text-base md:text-lg lg:text-2xl font-bold"
                  style={{ color: theme.palette.text.primary }}
                >
                  <CountUp {...countUpProps} end={48} />
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center w-1/2 sm:w-1/5 group"
                variants={statItemVariants}
                custom={4}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <DoneOutlineIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
                  }}
                  className="group-hover:animate-pulse"
                />
                <p
                  className="mt-2 text-xs sm:text-xs md:text-sm font-semibold"
                  style={{ color: theme.palette.text.secondary }}
                >
                  Awarded
                </p>
                <p
                  className="mt-1 text-sm sm:text-base md:text-lg lg:text-2xl font-bold"
                  style={{ color: theme.palette.text.primary }}
                >
                  <CountUp {...countUpProps} end={96} />
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Child Components Section */}
      <div className="w-full flex flex-col min-h-screen" style={{ backgroundColor: theme.palette.background.default }}>
        <div className="md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto px-4 sm:px-6 md:px-0">
          <ErrorBoundary>
            <Suspense
              fallback={
                <SectionLoader message="Loading SelectingQTOHouse..." />
              }
            >
              <SelectingQTOHouse />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense
              fallback={
                <SectionLoader message="Loading CommitmentToValue..." />
              }
            >
              <CommitmentToValue />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense
              fallback={
                <SectionLoader message="Loading TakeoffServices..." />
              }
            >
              <TakeoffServices />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense
              fallback={<SectionLoader message="Loading Process..." />}
            >
              <Process />
            </Suspense>
          </ErrorBoundary>
        </div>

        <ErrorBoundary>
          <Suspense
            fallback={<SectionLoader message="Loading EsteemedClientele..." />}
          >
            <EsteemedClientele />
          </Suspense>
        </ErrorBoundary>

        
      </div>

      {/* Popup Snackbar */}
      <AnimatePresence>
        {showPopup && (
          <Snackbar
            open={showPopup}
            autoHideDuration={6000}
            onClose={handleClosePopup}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Alert
                onClose={handleClosePopup}
                severity="success"
                sx={{
                  width: "100%",
                  backgroundColor: theme.palette.success.main,
                  color: theme.palette.success.contrastText,
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                Welcome back! You have successfully logged in.
              </Alert>
            </motion.div>
          </Snackbar>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;