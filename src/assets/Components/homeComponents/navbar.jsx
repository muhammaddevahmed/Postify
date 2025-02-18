import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <Link to='/' >
       <img src="src/logo.png" alt="Logo" className="logo" />
       </Link>
        <span className="brand-name">ZARRIN</span>
      </div>
      <div className="navbar-right">
      <Link to="/">Home</Link>  
      <Link to="./Pages/Blog">Blog</Link>
      <Link to="./Pages/About">About</Link>
        <span className="search-icon">🔍</span>
       <Link to="./Pages/Contact"><button className="contact-btn">Contact Us</button></Link> 
      </div>
    </nav>
  );
};

export default Navbar;
