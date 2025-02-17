
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
        <Link to='/'><li>Home</li></Link>
        <Link to="./Blog"><li>Blog</li></Link>
        <li><a href="#">About</a></li>
        <Link to="./Contact"><li>Contact Us</li></Link>
      </ul>

      {/* Social Media Icons */}
      <div className="social-icons">
        <Link to='./Error'><span className="icon">FB</span></Link>
        <Link to='./Error'><span className="icon">IG</span></Link>
        <Link to='./Error'><span className="icon">LN</span></Link>
        <Link to='./Error'><span className="icon">YT</span></Link>
        
      </div>

      {/* Blue Horizontal Line */}
      <hr className="footer-line" />

      {/* Copyright Message */}
      <p className="copyright">&copy; 2025 Your Brand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
