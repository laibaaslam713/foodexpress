import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fastfood from "..//../assets/zinger-burger.jpg";
import desifood from "..//../assets/haleem.jpg";
import sweetndrinks from "..//../assets/brownie.jpg";
import bakery from "../../assets/croissant.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('#navbar') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <section className="hero">
      <header>
        <div className="logo">
          <h1>Food Express</h1>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          ☰
        </button>

        {/* Navigation */}
        <div id="navbar" className={isMobileMenuOpen ? 'active' : ''}>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>

          <div
            className="menu-wrapper"
            onMouseEnter={() => !isMobile && setMenuOpen(true)}
            onMouseLeave={() => !isMobile && setMenuOpen(false)}
          >
            <span 
              className="menu-link" 
              onClick={handleMenuClick}
            >
              Menu
            </span>

            {(menuOpen || (!isMobile && menuOpen)) && (
              <div 
                className="mega-menu" 
                onMouseLeave={() => !isMobile && setMenuOpen(false)}
              >
                <div className="menu-column">
                  <img src={fastfood} alt='fast food' />
                  <h4>Fast Food</h4>
                  <Link to="/fastfood/burgers" onClick={closeMobileMenu}>Burgers</Link>
                  <Link to="/fastfood/pizza" onClick={closeMobileMenu}>Pizza</Link>
                  <Link to="/fastfood/fries" onClick={closeMobileMenu}>Fries</Link>
                </div>

                <div className="menu-column">
                  <img src={desifood} alt='desi food' />
                  <h4>Desi Food</h4>
                  <Link to="/desifood" onClick={closeMobileMenu}>View Items</Link>
                </div>

                <div className="menu-column">
                  <img src={sweetndrinks} alt='sweet and drinks' />
                  <h4>Sweets</h4>
                  <Link to="/sweets/desserts" onClick={closeMobileMenu}>Desserts</Link>
                  <Link to="/sweets/drinks" onClick={closeMobileMenu}>Drinks</Link>
                </div>

                <div className="menu-column">
                  <img src={bakery} alt='bakery' />
                  <h4>Bakery</h4>
                  <Link to="/bakery" onClick={closeMobileMenu}>View Items</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" onClick={closeMobileMenu}>About</Link>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </div>
      </header>
      
    </section>
  );
};

export default Header;