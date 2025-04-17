import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/about.avif";
import SectionLoader from "../../components/common/SectionLoader";
import { 
  Typography, 
  Container, 
  Box, 
  Paper, 
  Grid, 
  Divider,
  useMediaQuery,
  useTheme,
  IconButton
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const EsteemedClientele = lazy(() => import("../../components/public/Home/EsteemedClientele"));
const CoreValue = lazy(() => import("../../components/public/About/CoreValue"));
const OurVision = lazy(() => import("../../components/public/About/OurVision"));
const OurMission = lazy(() => import("../../components/public/About/OurMission"));

const backgroundVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};

const aboutSectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.2, ease: "easeOut" },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const clienteleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const sectionBackground = theme.palette.mode === "dark"
    ? `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`
    : `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<SectionLoader />}>
      <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative', bgcolor: theme.palette.background.default }}>
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={backgroundVariants}
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            variants={backgroundVariants}
          >
            <img
              src={aboutimg}
              alt="About QTO House - Construction Pre-Bidding Services"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <Box sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: theme.palette.mode === 'dark' 
                ? 'rgba(28, 37, 38, 0.6)' 
                : 'rgba(28, 37, 38, 0.5)',
              backdropFilter: 'blur(6px)'
            }} />
          </motion.div>
          
          <Container 
            maxWidth="lg" 
            sx={{ 
              height: '100%', 
              position: 'relative', 
              zIndex: 10,
              px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }
            }}
          >
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center"
              variants={titleVariants}
            >
              <motion.div 
                variants={titleVariants}
                className="px-2 sm:px-3 md:px-4 w-full"
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
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white',
                    opacity: 0.9,
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.375rem' },
                    textAlign: 'center',
                    maxWidth: { xs: '90%', sm: '80%', md: '700px', lg: '800px', xl: '900px' },
                    margin: '0 auto',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    px: { xs: 1, sm: 0 }
                  }}
                >
                  Your Trusted Partner in Construction Pre-Bidding Services
                </Typography>
              </motion.div>
            </motion.div>
          </Container>
        </motion.div>

        {/* About Us Section */}
        <Container 
          maxWidth="xl" 
          sx={{ 
            position: 'relative', 
            zIndex: 20, 
            px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 } 
          }}
        >
          <motion.div
            className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-28 mb-12"
            initial="hidden"
            animate="visible"
            variants={aboutSectionVariants}
          >
            <Paper
              elevation={8}
              sx={{
                borderRadius: { xs: '10px', md: '14px' },
                overflow: 'hidden',
                bgcolor: theme.palette.background.paper,
                backdropFilter: "blur(12px)",
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 20px 40px -10px rgba(255, 255, 255, 0.15)' 
                  : '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: theme.palette.mode === 'dark'
                    ? `radial-gradient(circle at 20% 20%, ${theme.palette.primary.main}20, transparent)`
                    : `radial-gradient(circle at 20% 20%, ${theme.palette.primary.main}10, transparent)`,
                  zIndex: 0,
                  pointerEvents: 'none'
                }
              }}
            >
              <Box sx={{ 
                padding: { xs: '1.5rem 1rem', sm: '2rem 1.5rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
                position: 'relative',
                zIndex: 1
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  marginBottom: { xs: 2, md: 3 }
                }}>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    sx={{ 
                      fontWeight: 600,
                      marginBottom: 1,
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
                      color: theme.palette.text.primary,
                      textAlign: 'center',
                      letterSpacing: '0.02em',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                    role="heading"
                    aria-level="2"
                  >
                    About Us
                  </Typography>
                  <Divider sx={{ 
                    bgcolor: theme.palette.primary.main, 
                    height: { xs: '2px', md: '3px' }, 
                    width: { xs: '50px', md: '70px', lg: '80px' }, 
                    borderRadius: '2px',
                    marginBottom: { xs: 1, md: 1.5 }
                  }} />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      textAlign: 'center',
                      maxWidth: { xs: '90%', md: '600px', lg: '700px' },
                      fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.125rem' },
                      lineHeight: 1.6
                    }}
                  >
                    Delivering Excellence in Construction Estimation Since Inception
                  </Typography>
                </Box>

                <motion.div>
                  {[
                    {
                      text: "Welcome to QTO House, your trusted partner in the construction industry. We specialize in pre-construction bidding services, helping general contractors streamline operations, deliver cost-competitive estimates, and win bids with innovative solutions.",
                      highlights: ["Trusted Partner", "Pre-Construction Bidding", "Cost-Competitive Estimates"]
                    },
                    {
                      text: "Our team of versatile estimators uses advanced software tools to provide online services that meet the highest professional standards. We prioritize our customers' best interests, approaching each task with responsibility and care.",
                      highlights: ["Versatile Estimators", "Advanced Software", "Highest Standards"]
                    },
                    {
                      text: "With the latest industry software, our skilled team ensures the most accurate cost estimates for your projects. We offer the fastest turnaround times at competitive fees, staying at the forefront of construction estimation innovations.",
                      highlights: ["Accurate Estimates", "Fastest Turnaround", "Competitive Fees"]
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={paragraphVariants}
                    >
                      <Typography 
                        paragraph 
                        sx={{ 
                          fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.125rem' },
                          lineHeight: { xs: 1.6, md: 1.8 },
                          color: theme.palette.text.secondary,
                          textAlign: { xs: 'left', md: 'justify' },
                          marginBottom: { xs: 1.5, md: 2 },
                          letterSpacing: '0.01em',
                          '&:last-child': { mb: 0 }
                        }}
                      >
                        {item.text}
                      </Typography>
                      <Box sx={{ 
                        mt: 0.5, 
                        pl: { xs: 1, md: 2 }, 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: { xs: 0.5, md: 1 }
                      }}>
                        {item.highlights.map((highlight, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              px: { xs: 1, md: 1.5 },
                              py: 0.5,
                              borderRadius: '10px',
                              bgcolor: theme.palette.primary.main + '20',
                              color: theme.palette.primary.main,
                              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem', xl: '0.9rem' },
                              fontWeight: 500,
                              transition: 'background 0.3s ease-in-out',
                              '&:hover': {
                                bgcolor: theme.palette.primary.main + '40'
                              }
                            }}
                          >
                            {highlight}
                          </Box>
                        ))}
                      </Box>
                    </motion.div>
                  ))}
                </motion.div>
              </Box>
            </Paper>
          </motion.div>
        </Container>

        {/* Foundation Section */}
        <Box sx={{ 
          background: sectionBackground,
          py: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 }, 
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Container 
            maxWidth="xl"
            sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 } }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scrollRevealVariants}
              className="mb-8 md:mb-10"
            >
              <Box sx={{ textAlign: 'center', marginBottom: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
                <Typography 
                  variant="h3" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 600,
                    marginBottom: 1,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
                    color: theme.palette.text.primary,
                    letterSpacing: '0.02em',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  role="heading"
                  aria-level="2"
                >
                  Our Foundation
                </Typography>
                <Divider sx={{ 
                  bgcolor: theme.palette.primary.main, 
                  height: { xs: '2px', md: '3px' }, 
                  width: { xs: '50px', md: '70px', lg: '80px' }, 
                  borderRadius: '2px',
                  margin: '0 auto',
                  marginBottom: { xs: 1, md: 1.5 },
                  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`
                }} />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    maxWidth: { xs: '90%', sm: '80%', md: '600px', lg: '700px' },
                    margin: '0 auto',
                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.125rem' },
                    lineHeight: 1.6
                  }}
                >
                  The Principles That Guide Our Work and Define Our Approach
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <Box sx={{ 
                mb: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 },
                px: { xs: 0, sm: 1, md: 2 }
              }}>
                <Suspense fallback={<SectionLoader />}>
                  <CoreValue />
                </Suspense>
              </Box>
            </motion.div>

            <Grid 
              container 
              spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }} 
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={6} md={6}>
                <motion.div 
                  custom={1} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={sectionVariants}
                  style={{ height: '100%' }}
                >
                  <Suspense fallback={<SectionLoader />}>
                    <OurVision />
                  </Suspense>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <motion.div 
                  custom={2} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={sectionVariants}
                  style={{ height: '100%' }}
                >
                  <Suspense fallback={<SectionLoader />}>
                    <OurMission />
                  </Suspense>
                </motion.div>
              </Grid>
            </Grid>
          </Container>

          {!isMobile && (
            <>
              <Box 
                sx={{
                  position: 'absolute',
                  top: { sm: 30, md: 50, lg: 60 },
                  left: { sm: -60, md: -80, lg: -100 },
                  width: { sm: 120, md: 160, lg: 200 },
                  height: { sm: 120, md: 160, lg: 200 },
                  borderRadius: '50%',
                  background: theme.palette.mode === 'dark' 
                    ? `radial-gradient(circle, ${theme.palette.primary.main}20, transparent)` 
                    : `radial-gradient(circle, ${theme.palette.primary.main}10, transparent)`,
                  zIndex: 0,
                  display: { xs: 'none', sm: 'block' },
                  filter: 'blur(40px)',
                  opacity: 0.5
                }}
              />
              <Box 
                sx={{
                  position: 'absolute',
                  bottom: { sm: -30, md: -50, lg: -60 },
                  right: { sm: -30, md: -50, lg: -60 },
                  width: { sm: 140, md: 180, lg: 220 },
                  height: { sm: 140, md: 180, lg: 220 },
                  borderRadius: '50%',
                  background: theme.palette.mode === 'dark' 
                    ? `radial-gradient(circle, ${theme.palette.primary.main}20, transparent)` 
                    : `radial-gradient(circle, ${theme.palette.primary.main}10, transparent)`,
                  zIndex: 0,
                  display: { xs: 'none', sm: 'block' },
                  filter: 'blur(40px)',
                  opacity: 0.5
                }}
              />
            </>
          )}
        </Box>

        {/* Clients Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={clienteleVariants}
        >
          <Box sx={{ 
            py: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 },
            bgcolor: sectionBackground
          }}>
            <Container 
              maxWidth="xl"
              sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 } }}
            >
              <Box sx={{ 
                textAlign: 'center', 
                marginBottom: { xs: 3, sm: 4, md: 5, lg: 6 },
                px: { xs: 1, sm: 0 }
              }}>
                <Typography 
                  variant="h3" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 600,
                    marginBottom: 1,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem' },
                    color: theme.palette.text.primary,
                    letterSpacing: '0.02em',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  role="heading"
                  aria-level="2"
                >
                  Our Valued Clients
                </Typography>
                <Divider sx={{ 
                  bgcolor: theme.palette.primary.main, 
                  height: { xs: '2px', md: '3px' }, 
                  width: { xs: '50px', md: '70px', lg: '80px' }, 
                  borderRadius: '2px',
                  margin: '0 auto',
                  marginBottom: { xs: 1, md: 1.5 },
                  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`
                }} />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    maxWidth: { xs: '90%', sm: '80%', md: '600px', lg: '700px' },
                    margin: '0 auto',
                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.125rem' },
                    lineHeight: 1.6
                  }}
                >
                  Trusted by Industry Leaders and Innovative Companies
                </Typography>
              </Box>
            </Container>
            <Box sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 } }}>
              <Suspense fallback={<SectionLoader />}>
                <EsteemedClientele />
              </Suspense>
            </Box>
          </Box>
        </motion.div>

        {/* Scroll to Top Button */}
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: { xs: 12, sm: 16, md: 20 },
            right: { xs: 12, sm: 16, md: 20 },
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': { bgcolor: theme.palette.primary.dark },
            boxShadow: theme.palette.mode === 'dark' 
              ? '0 3px 8px rgba(255, 255, 255, 0.2)' 
              : '0 3px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            width: { xs: 40, sm: 48, md: 56 },
            height: { xs: 40, sm: 48, md: 56 },
            transition: 'all 0.3s ease-in-out'
          }}
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
        </IconButton>
      </Box>
    </Suspense>
  );
}

export default About;