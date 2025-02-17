import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand-name">MyWebsite</span>
      </div>
      <div className="navbar-right">
      <Link to="./Blog">Blog</Link>
      <Link to="/About">About</Link>
        <span className="search-icon">🔍</span>
       <Link to="/About"><button className="contact-btn">Contact Us</button></Link> 
      </div>
    </nav>
  );
};

export default Navbar;
