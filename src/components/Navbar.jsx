import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#hero" className="logo" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                >
                    <div className="logo-dot"></div>
                    <span>Hajar</span>
                    <span>LOTFI</span>
                </a>

                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#AboutStats" onClick={(e) => { e.preventDefault(); scrollToSection('AboutStats'); }}>About</a>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
                    <a href="#Tech Stack" onClick={(e) => {e.preventDefault(); scrollToSection('Tech Stack');}}>My skills</a>
                    <a href="#tools" onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }}>Tech Tools</a>
                    <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a>
                    <a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>Certificates</a>
                    <a href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>Contact</a>
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;