import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#services">Web Development</a></li>
                            <li><a href="#services">Backend & Database Management</a></li>
                            <li><a href="#services">Responsive Web Design</a></li>
                            <li><a href="#services">Web Applications & Systems</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#AboutStats">About</a></li>
                            <li><a href="#Tech Stack">Technologie</a></li>
                            <li><a href="#tools">Tools</a></li>
                            <li><a href="#work">Portfolio</a></li>

                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <p>Let's collaborate on your next project.</p>
                        <div className="social-links">
                            <a href="https://github.com/hajarlolo" aria-label="Github"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/hajar-lotfi-135201329/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#contact" aria-label="Email"
                                onClick={(e) => {
                                    e.preventDefault(); navigator.clipboard.writeText('lotfihajarlotfihajar@gmail.com');
                                    alert('📧 Email copied to clipboard!');
                                }}>
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href="#contact" aria-label="Phone"
                                onClick={(e) => {
                                    e.preventDefault(); navigator.clipboard.writeText('0750292446');
                                    alert('📱 Phone number copied to clipboard!');
                                }}>
                                <i className="fas fa-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© {currentYear} Hajar — Let's create something .</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;