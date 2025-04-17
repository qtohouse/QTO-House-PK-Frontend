import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/common/Header';
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Contact from '../pages/public/Contact';
import Footer from '../components/common/Footer';

const AppRouter = ({ toggleTheme, isDarkMode }) => {
  return (
    <Router>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;