import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Services from './components/Services';
import Tech from './components/Tech';
import ToolsSection from './components/ToolsSection';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates'; // Add this
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutStats />
      <Services />
      <Tech />
      <ToolsSection />
      <Portfolio />
      <Certificates /> {/* Add this line */}
      <Footer />
    </div>
  );
}

export default App;