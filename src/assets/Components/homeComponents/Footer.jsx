
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo & Brand Name */}
      <div className="footer-logo">
        <img src="your-logo-url.png" alt="Logo" className="logo" />
        <span className="brand-name">Your Brand</span>
      </div>

      {/* Navigation Links */}
      <ul className="footer-links">
        <li><a href="#">Home</a></li>
        <Link to="./Blog"><li>Blog</li></Link> 
      <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      {/* Social Media Icons */}
      <div className="social-icons">
        <span className="icon">FB</span>
        <span className="icon">IG</span>
        <span className="icon">LN</span>
        <span className="icon">YT</span>
      </div>

      {/* Blue Horizontal Line */}
      <hr className="footer-line" />

      {/* Copyright Message */}
      <p className="copyright">&copy; 2025 Your Brand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
