import "../styles/header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isFormPage = location.pathname === '/form';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="top-nav">
          <div className="nav-left">
            {isFormPage ? (
              <Link to="/" onClick={handleNavClick}>Home</Link>
            ) : (
              <>
                <a onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); handleNavClick(); }}>
                  About
                </a>
                <a href="#room-info" onClick={handleNavClick}>Facility</a>
                <a href="#gallery" onClick={handleNavClick}>Gallery</a>
                <a href="#contact-info" onClick={handleNavClick}>Contact</a>
                <Link to="/form" onClick={handleNavClick}>Form</Link>
              </>
            )}
          </div>

          <div className="nav-center">
            <Link to="/" onClick={handleNavClick}>
              <img 
                src="/LOGONEWTENERIFE.png" 
                alt="Villa Los Olivos" 
                className="brand-logo" 
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>

          <div className="nav-right">
            <a
              href="https://www.airbnb.com/rooms/1513066939468971782?photo_id=2398882751&source_impression_id=p3_1762810892_P3cEs9DH4rnDr8Dy&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              className="airbnb-logo-link"
            >
              <img 
                src="/Airbnb-Logo-Best.png" 
                alt="" 
                className="airbnb-logo"
              />
            </a>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </nav>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {isFormPage ? (
            <Link to="/" onClick={handleNavClick}>Home</Link>
          ) : (
            <>
              <a onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); handleNavClick(); }}>
                About
              </a>
              <a href="#room-info" onClick={handleNavClick}>Facility</a>
              <a href="#gallery" onClick={handleNavClick}>Gallery</a>
              <a href="#contact-info" onClick={handleNavClick}>Contact</a>
              <Link to="/form" onClick={handleNavClick}>Form</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
