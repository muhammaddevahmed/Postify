import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand-name">MyWebsite</span>
      </div>
      <div className="navbar-right">
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
        <span className="search-icon">🔍</span>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
