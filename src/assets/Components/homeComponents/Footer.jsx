
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo & Brand Name */}
      <div className="footer-logo">
       <Link to='/' >
       <img src="logo.png" alt="Logo" className="logo" />
       </Link>
        <span className="brand-name">ZARRIN</span>
      </div>

      {/* Navigation Links */}
      <ul className="footer-links">
        <Link to='/'><li>Home</li></Link>
        <Link to="./Pages/Blog"><li>Blog</li></Link>
        <Link to="./Pages/About"><li>About Us</li></Link>
        <Link to="./Pages/Contact"><li>Contact Us</li></Link>
      </ul>

      {/* Social Media Icons */}
      <div className="social-icons">
        <Link to='./Pages/Error'><span className="icon">FB</span></Link>
        <Link to='./Pages/Error'><span className="icon">IG</span></Link>
        <Link to='./Pages/Error'><span className="icon">LN</span></Link>
        <Link to='./Pages/Error'><span className="icon">YT</span></Link>
        
      </div>

      {/* Blue Horizontal Line */}
      <hr className="footer-line" />

      {/* Copyright Message */}
      <p className="copyright">&copy; 2025 Your Brand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
