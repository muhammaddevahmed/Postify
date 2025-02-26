import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <span className="brand-name">ZARRIN</span>
      </div>

      <button className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/Pages/Blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/Pages/About" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/Pages/Profile" className="profile-icon" onClick={() => setMenuOpen(false)}>🧑‍💼 Profile</Link>
        <span className="search-icon" onClick={() => setMenuOpen(false)}>🔍</span>
        <Link to="/Pages/Contact">
          <button className="contact-btn" onClick={() => setMenuOpen(false)}>Contact Us</button>
        </Link>
        <Link to="/Pages/Signup">
          <button className="login-btn" onClick={() => setMenuOpen(false)}>🔑 Login / Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

