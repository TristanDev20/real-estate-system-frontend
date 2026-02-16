import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavBar';
import Projects from './components/FeaturedProjects';
import Home from './pages/Home';
import About from './pages/About';
import Portals from './pages/Portals';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/portals" element={<Portals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
