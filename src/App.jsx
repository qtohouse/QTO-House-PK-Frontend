import AppRouter from './routes/AppRouter';
import Theme from './theme';
import { useState } from 'react';
import Header from './components/common/Header';
import { darkTheme, lightTheme } from './theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const appliedTheme = isDarkMode ? darkTheme : lightTheme;

  console.log('Applied Theme:', appliedTheme); // Debug the theme object

  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Theme theme={appliedTheme}>
        <AppRouter />
      </Theme>
    </>
  );
}

export default App;