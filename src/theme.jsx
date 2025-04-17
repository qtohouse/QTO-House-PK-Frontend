import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


// Define the dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FBBF24', // Yellow from the logo roofs
      contrastText: '#1C2526', // Dark color for text on primary background
    },
    secondary: {
      main: '#9CA3AF', // Lighter gray from the buildings
    },
    background: {
      default: '#1C2526', // Dark background from the logo and sections
      paper: '#2D3748', // Slightly lighter dark shade for cards and paper elements
    },
    text: {
      primary: '#FFFFFF', // White for text to contrast with dark background
      secondary: '#D1D5DB', // Adjusted to match the light gray in the sections
    },
  },
  typography: {
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

// Define the light theme (unchanged)
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FBBF24',
      contrastText: '#1C2526',
    },
    secondary: {
      main: '#4B5563',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F3F4F6',
    },
    text: {
      primary: '#1C2526',
      secondary: '#4B5563',
    },
  },
  typography: {
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

// Theme component (unchanged)
const Theme = ({ children, theme }) => {
  if (!theme) {
    console.error('Theme prop is undefined. Defaulting to darkTheme.');
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;