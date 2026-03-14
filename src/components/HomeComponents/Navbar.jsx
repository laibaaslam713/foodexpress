

// import React, { useState } from 'react';
// // import hamburger from "../../assets/hamburger.png";
// import { Link } from "react-router-dom";
// import fastfood from "..//../assets/zinger-burger.jpg";
// import desifood from "..//../assets/haleem.jpg";
// import sweetndrinks from "..//../assets/brownie.jpg";
// import bakery from "../../assets/croissant.png";

// const Navbar = () => {

//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <section className="hero">
//         <header>
//           <div className="logo">
//             {/* <img src={hamburger} width="30" alt="Logo" onClick={toggleMenu} /> */}
//             <h1>Food Express</h1>
//           </div>

//           <div id="navbar">
//             <Link to="/">Home</Link>
//             <div
//           className="menu-wrapper"
//           onMouseEnter={() => setMenuOpen(true)}
//         >
//           <span className="menu-link">Menu</span>

//           {menuOpen && (
//             <div className="mega-menu" onMouseLeave={() => setMenuOpen(false)}>
//               <div className="menu-column">
//                 <img src={fastfood} alt='fast food'/>
//                 <h4>Fast Food</h4>
//                 <Link to="/fastfood/burgers">Burgers</Link>
//                 <Link to="/fastfood/pizza">Pizza</Link>
//                 <Link to="/fastfood/fries">Fries</Link>
//               </div>

//               <div className="menu-column">
//                 <img src={desifood} alt='desi food' />
//                 <h4>Desi Food</h4>
//                 <Link to="/desifood">View Items</Link>
//               </div>

//               <div className="menu-column">
//                 <img src={sweetndrinks}  alt='sweet and drinks'/>
//                 <h4>Sweets</h4>
//                 <Link to="/sweets/desserts">Desserts</Link>
//                 <Link to="/sweets/drinks">Drinks</Link>
//               </div>

//               <div className="menu-column">
//                 <img src={bakery}  alt='bakery'/>
//                 <h4>Bakery</h4>
//                 <Link to="/bakery">View Items</Link>
//               </div>
//             </div>
//           )}
//         </div>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
            
//           </div>
//         </header>
//       </section>

//       {/* <div className={`side-menu ${menuOpen ? "open" : ""}`}>
//         <button className="close-btn" onClick={toggleMenu}>✖</button>

//         <div className="menu-item">
//           <p onClick={() => toggleDropdown("fastfood")}>Fast Food ▾</p>
//           {openDropdown === "fastfood" && (
//             <div className="dropdown">
//               <Link to="/fastfood/burgers">Burgers</Link>
//               <Link to="/fastfood/pizza">Pizza</Link>
//               <Link to="/fastfood/fries">Fries</Link>
//             </div>
//           )}
//         </div>

//         <div className="menu-item">
//           <Link  to= "/desifood"><p>Desi Food</p></Link>
          
//         </div>

//         <div className="menu-item">
//           <p onClick={() => toggleDropdown("sweets")}>Sweets & Drinks ▾</p>
//           {openDropdown === "sweets" && (
//             <div className="dropdown">
//               <Link to="/sweets/desserts">Desserts</Link>
//               <Link to="/sweets/drinks">Drinks</Link>
//             </div>
//           )}
//         </div>

//         <div className="menu-item">
//           <Link to="/bakery"><p>Bakery Items</p></Link>
          
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Navbar;

// App.js ya Header component mein
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons ke liye (npm install lucide-react)

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <h1>Your Logo</h1>
      </div>
      
      {/* Desktop Navigation */}
      <nav id="navbar" className={isMobileMenuOpen ? 'mobile-open' : ''}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <div className="menu-wrapper">
          <span className="menu-link">Categories</span>
          <div className="mega-menu">
            {/* Mega menu content */}
          </div>
        </div>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Menu for Mobile */}
      <div className={`side-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={20} />
        </button>
        
        <div className="menu-item">
          <p onClick={() => setIsMobileMenuOpen(false)}>Home</p>
        </div>
        
        <div className="menu-item">
          <p>Categories</p>
          <div className="dropdown">
            <span onClick={() => setIsMobileMenuOpen(false)}>Category 1</span>
            <span onClick={() => setIsMobileMenuOpen(false)}>Category 2</span>
            <span onClick={() => setIsMobileMenuOpen(false)}>Category 3</span>
          </div>
        </div>
        
        <div className="menu-item">
          <p onClick={() => setIsMobileMenuOpen(false)}>About</p>
        </div>
        
        <div className="menu-item">
          <p onClick={() => setIsMobileMenuOpen(false)}>Contact</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;