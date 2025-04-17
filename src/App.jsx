import AppRouter from './routes/AppRouter';
import Theme from './theme';
import { useState, useEffect } from 'react';
import { darkTheme, lightTheme } from './theme';

function App() {
  // Initialize isDarkMode from localStorage, default to true if not set
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // Save the theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const appliedTheme = isDarkMode ? darkTheme : lightTheme;

  console.log('Applied Theme:', appliedTheme); // Debug the theme object

  return (
    <Theme theme={appliedTheme}>
      <AppRouter toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </Theme>
  );
}

export default App;