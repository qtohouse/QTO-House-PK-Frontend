import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import contact from "../../assets/contact.avif";
import { 
  Email, 
  Phone, 
  Person, 
  LocationCity, 
  Business, 
  Subject, 
  Message, 
  Send, 
  ArrowForward
} from "@mui/icons-material";
import { 
  Snackbar, 
  Alert, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Box, 
  Paper, 
  Grid, 
  Divider, 
  CircularProgress,
  useMediaQuery,
  useTheme,
  InputAdornment
} from "@mui/material";

// Animation variants for the background image section
const backgroundVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
};

// Animation variants for the form section
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } },
};

// Animation variants for form fields (staggered effect)
const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.2, ease: "easeOut" },
  }),
};

// Animation variants for snackbars
const snackbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Animation for elements on scroll
const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    city: false,
    companyName: false,
    subject: false,
    message: false
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) return;

      try {
        const response = await fetch(`${API_BASE_URL}/accounts/current_user/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setName(data.fullname || "");
          setEmail(data.email || "");
          setPhoneNumber(data.phone_number || "");
          setCity(data.city || "");
          setCompanyName(data.company_name || "");
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [API_BASE_URL]);

  const validateForm = () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      phoneNumber: !phoneNumber.trim(),
      city: !city.trim(),
      companyName: !companyName.trim(),
      subject: !subject.trim(),
      message: !message.trim()
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setResponseMessage("Please fill out all fields correctly.");
      setErrorPopup(true);
      setIsSubmitting(false);
      return;
    }

    const requestData = {
      fullname: name,
      email,
      phone_number: phoneNumber,
      city,
      company_name: companyName,
      subject,
      message,
    };

    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      setResponseMessage("You need to log in before submitting the form.");
      setErrorPopup(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/apps/contact-us/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setResponseMessage("Thank you for contacting us. We will get back to you soon.");
        setSuccessPopup(true);
        setMessage("");
        setSubject("");
      } else {
        setResponseMessage(`Error: ${responseData.detail || responseData.message || "Something went wrong."}`);
        setErrorPopup(true);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
      setErrorPopup(true);
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessPopup = (event, reason) => {
    if (reason === "clickaway") return;
    setSuccessPopup(false);
  };

  const handleCloseErrorPopup = (event, reason) => {
    if (reason === "clickaway") return;
    setErrorPopup(false);
  };

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      bgcolor: theme.palette.background.default,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Hero Section with Background Image */}
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
            src={contact}
            alt="Contact Us - QTO House"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <Box sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(28, 37, 38, 0.6)' : 'rgba(28, 37, 38, 0.5)',
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
            variants={textVariants}
          >
            <Box 
              sx={{ 
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(12px)',
                padding: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                borderRadius: '16px',
                maxWidth: { xs: '95%', sm: '90%', md: '800px', lg: '900px' },
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 20px 40px -10px rgba(255, 255, 255, 0.15)' 
                  : '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: theme.palette.mode === 'dark'
                    ? `radial-gradient(circle at 50% 20%, ${theme.palette.primary.main}20, transparent)`
                    : `radial-gradient(circle at 50% 20%, ${theme.palette.primary.main}10, transparent)`,
                  zIndex: 0,
                  pointerEvents: 'none'
                }
              }}
            >
              <motion.div variants={textVariants} sx={{ position: 'relative', zIndex: 1 }}>
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
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  role="heading"
                  aria-level="1"
                >
                  Get In Touch
                </Typography>
                <Divider sx={{ 
                  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`, 
                  height: { xs: '2px', md: '3px' },
                  width: { xs: '120px', sm: '150px', md: '180px', lg: '200px' },
                  margin: '0 auto', 
                  marginBottom: { xs: 1.5, md: 2 }
                }} />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    maxWidth: { xs: '90%', sm: '80%', md: '700px', lg: '800px' },
                    margin: '0 auto',
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    opacity: 0.9
                  }}
                >
                  We are here to assist you. Please fill out the form below, and we'll get back to you as soon as possible.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </motion.div>

      {/* Contact Form Section */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 20, 
          px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          mb: { xs: 8, sm: 10, md: 12 }
        }}
      >
        <motion.div
          className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-28"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <Paper
            elevation={10}
            sx={{
              borderRadius: { xs: '12px', md: '16px' },
              overflow: 'hidden',
              bgcolor: theme.palette.background.paper,
              backdropFilter: 'blur(12px)',
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
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
              padding: { xs: '1.5rem', md: '2rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}>
              <Send sx={{ color: theme.palette.primary.contrastText, fontSize: { xs: '1.5rem', md: '2rem' } }} />
              <Typography 
                variant="h5" 
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  fontWeight: 600,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                }}
              >
                Send Us a Message
              </Typography>
            </Box>
            
            <Box sx={{ 
              padding: { xs: '1.5rem 1.25rem', sm: '2rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
              position: 'relative',
              zIndex: 1
            }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <motion.div custom={0} variants={fieldVariants}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={errors.name}
                        helperText={errors.name ? "Name is required" : ""}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: '10px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: '2px',
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: theme.palette.text.secondary,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiFormHelperText-root": {
                            color: theme.palette.error.main,
                            fontSize: '0.75rem'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <motion.div custom={1} variants={fieldVariants}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors.email}
                        helperText={errors.email ? "Valid email is required" : ""}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: '10px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: '2px',
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: theme.palette.text.secondary,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiFormHelperText-root": {
                            color: theme.palette.error.main,
                            fontSize: '0.75rem'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <motion.div custom={2} variants={fieldVariants}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        error={errors.phoneNumber}
                        helperText={errors.phoneNumber ? "Phone number is required" : ""}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Phone sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: '10px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: '2px',
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: theme.palette.text.secondary,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiFormHelperText-root": {
                            color: theme.palette.error.main,
                            fontSize: '0.75rem'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <motion.div custom={3} variants={fieldVariants}>
                      <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        error={errors.city}
                        helperText={errors.city ? "City is required" : ""}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationCity sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: '10px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: '2px',
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: theme.palette.text.secondary,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiFormHelperText-root": {
                            color: theme.palette.error.main,
                            fontSize: '0.75rem'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <motion.div custom={4} variants={fieldVariants}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        variant="outlined"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        error={errors.companyName}
                        helperText={errors.companyName ? "Company name is required" : ""}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Business sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: '10px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: '2px',
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: theme.palette.text.secondary,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiFormHelperText-root": {
                            color: theme.palette.error.main,
                            fontSize: '0.75rem'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <motion.div custom={5} variants={fieldVariants}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        error={errors.subject}
                        helperText={errors.subject ? "Subject is required" : ""}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Subject sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: '10px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: '2px',
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: theme.palette.text.secondary,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiFormHelperText-root": {
                            color: theme.palette.error.main,
                            fontSize: '0.75rem'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div custom={6} variants={fieldVariants}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        error={errors.message}
                        helperText={errors.message ? "Message is required" : ""}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                              <Message sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: '10px',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.5)',
                            "&:hover fieldset": {
                              borderColor: theme.palette.primary.main,
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: theme.palette.primary.main,
                              borderWidth: '2px',
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: theme.palette.text.secondary,
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiFormHelperText-root": {
                            color: theme.palette.error.main,
                            fontSize: '0.75rem'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                </Grid>

                <motion.div
                  custom={7}
                  variants={fieldVariants}
                  className="flex justify-center mt-8"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                    endIcon={!isSubmitting && <ArrowForward />}
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                      color: theme.palette.primary.contrastText,
                      padding: { xs: "10px 20px", sm: "12px 24px", md: "14px 28px" },
                      borderRadius: "10px",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1.1rem" },
                      "&:hover": { 
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}cc, ${theme.palette.primary.main}66)`,
                        boxShadow: `0 6px 15px ${theme.palette.primary.main}40`
                      },
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 4px 10px rgba(255, 255, 255, 0.1)' 
                        : '0 4px 10px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
                
                <motion.div custom={8} variants={fieldVariants}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      display: 'block', 
                      textAlign: 'center', 
                      marginTop: 2,
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}
                  >
                    Your information is secure. We'll never share your data with third parties.
                  </Typography>
                </motion.div>
              </form>
            </Box>
          </Paper>
        </motion.div>
      </Container>
      
      {/* Contact Information Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 8, sm: 10, md: 12 } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollRevealVariants}
        >
          <Box sx={{ 
            textAlign: 'center', 
            marginBottom: { xs: 4, sm: 5, md: 6 },
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: theme.palette.mode === 'dark'
                ? `radial-gradient(circle at 50% 0%, ${theme.palette.primary.main}20, transparent)`
                : `radial-gradient(circle at 50% 0%, ${theme.palette.primary.main}10, transparent)`,
              zIndex: 0,
              pointerEvents: 'none'
            }
          }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 600,
                marginBottom: 1,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                color: theme.palette.text.primary,
                letterSpacing: '0.02em',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                zIndex: 1
              }}
              role="heading"
              aria-level="2"
            >
              Other Ways to Reach Us
            </Typography>
            <Divider sx={{ 
              background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`, 
              height: { xs: '2px', md: '3px' },
              width: { xs: '50px', sm: '60px', md: '80px' },
              borderRadius: '2px',
              margin: '0 auto',
              marginBottom: { xs: 1, md: 1.5 },
              position: 'relative',
              zIndex: 1
            }} />
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.palette.text.secondary,
                maxWidth: { xs: '90%', sm: '80%', md: '700px' },
                margin: '0 auto',
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                position: 'relative',
                zIndex: 1
              }}
            >
              Our team is available through multiple channels to assist you.
            </Typography>
          </Box>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {[
              { 
                title: "Call Us", 
                icon: <Phone sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: theme.palette.primary.main }} />,
                content: "(0341) 7861985", 
                subtext: "Monday to Friday, 9am to 5pm EST"
              },
              { 
                title: "Email", 
                icon: <Email sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: theme.palette.primary.main }} />,
                content: "info@qtohouse.com.pk", 
                subtext: "We'll respond within 24 hours"
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  custom={index}
                  variants={fieldVariants}
                  whileHover={{ y: -5 }}
                >
                  <Paper 
                    elevation={2} 
                    sx={{ 
                      padding: { xs: 3, sm: 4, md: 4 },
                      borderRadius: '12px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: theme.palette.background.paper,
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                      boxShadow: theme.palette.mode === 'dark' 
                        ? '0 6px 15px rgba(255, 255, 255, 0.1)' 
                        : '0 6px 15px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 10px 20px rgba(255, 255, 255, 0.15)' 
                          : '0 10px 20px rgba(0, 0, 0, 0.15)'
                      },
                      position: 'relative',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: theme.palette.mode === 'dark'
                          ? `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}20, transparent)`
                          : `radial-gradient(circle at 30% 30%, ${theme.palette.primary.main}10, transparent)`,
                        zIndex: 0,
                        pointerEvents: 'none'
                      }
                    }}
                    role="article"
                    aria-label={`Contact Method: ${item.title}`}
                  >
                    <Box sx={{ mb: 2, position: 'relative', zIndex: 1 }}>
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 1, 
                        color: theme.palette.text.primary,
                        fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}80)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: 500, 
                        mb: 1, 
                        color: theme.palette.text.primary,
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {item.content}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                      }}
                    >
                      {item.subtext}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={successPopup}
        autoHideDuration={6000}
        onClose={handleCloseSuccessPopup}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={snackbarVariants}
        >
          <Alert
            onClose={handleCloseSuccessPopup}
            severity="success"
            sx={{
              width: "100%",
              background: theme.palette.mode === 'dark' ? 'rgba(46, 125, 50, 0.9)' : 'rgba(46, 125, 50, 0.95)',
              color: '#fff',
              borderRadius: '10px',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 6px 15px rgba(255, 255, 255, 0.1)' 
                : '0 6px 15px rgba(0, 0, 0, 0.1)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
              "& .MuiAlert-icon": { color: '#fff' },
              backdropFilter: 'blur(8px)'
            }}
          >
            {responseMessage}
          </Alert>
        </motion.div>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={errorPopup}
        autoHideDuration={6000}
        onClose={handleCloseErrorPopup}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={snackbarVariants}
        >
          <Alert
            onClose={handleCloseErrorPopup}
            severity="error"
            sx={{
              width: "100%",
              background: theme.palette.mode === 'dark' ? 'rgba(211, 47, 47, 0.9)' : 'rgba(211, 47, 47, 0.95)',
              color: '#fff',
              borderRadius: '10px',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 6px 15px rgba(255, 255, 255, 0.1)' 
                : '0 6px 15px rgba(0, 0, 0, 0.1)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
              "& .MuiAlert-icon": { color: '#fff' },
              backdropFilter: 'blur(8px)'
            }}
          >
            {responseMessage}
          </Alert>
        </motion.div>
      </Snackbar>
    </Box>
  );
}

export default Contact;