// import React , {useState}from 'react'
// import hamburger from "../assets/hamburger.png"

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     const toggleDropdown = (name) => {
//         setOpenDropdown(openDropdown === name ? null : name);
//     }
//   return (
//     <>
//         <section className="hero">
//             <header>
//                 <div className="logo">
//                     <img 
//                         src={hamburger}
//                         width="30" 
//                         alt="Logo"
//                         onClick={toggleMenu}
//                         />
//                     <h1>Food Express</h1>
//                 </div>

//                 <div id="navbar">
//                     <a href="#">Home</a>
//                     <a href="#">About</a>
//                     <a href="#">Services</a>
//                     <a href="#">Contact</a>
//                 </div>
//             </header>
//         </section>

//         <div className={`side-menu ${menuOpen ? "open" : ""}`}>
//             <button className="close-btn" onClick={toggleMenu}>✖</button>

//             <div className="menu-item">
//             <p onClick={() => toggleDropdown("fastfood")}>Fast Food ▾</p>
//             {openDropdown === "fastfood" && (
//                 <div className="dropdown">
//                 <span>Burger</span>
//                 <span>Pizza</span>
//                 <span>Fries</span>
//                 <span>Sandwich</span>
//                 </div>
//             )}
//             </div>

//             <div className="menu-item">
//             <p onClick={() => toggleDropdown("desifood")}>Desi Food ▾</p>
//             {openDropdown === "desifood" && (
//                 <div className="dropdown">
//                 <span>Biryani</span>
//                 <span>Karahi</span>
//                 <span>Qorma</span>
//                 <span>Haleem</span>
//                 </div>
//             )}
//             </div>

//             <div className="menu-item">
//             <p onClick={() => toggleDropdown("sweets")}>Sweets & Drinks ▾</p>
//             {openDropdown === "sweets" && (
//                 <div className="dropdown">
//                 <span>Cake</span>
//                 <span>Ice Cream</span>
//                 <span>Juice</span>
//                 <span>Milkshake</span>
//                 </div>
//             )}
//             </div>

//             <div className="menu-item">
//             <p onClick={() => toggleDropdown("bakery")}>Bakery Items ▾</p>
//             {openDropdown === "bakery" && (
//                 <div className="dropdown">
//                 <span>Bread</span>
//                 <span>Donuts</span>
//                 <span>Cookies</span>
//                 <span>Pastry</span>
//                 </div>
//             )}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import hamburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);

  return (
    <>
      <section className="hero">
        <header>
          <div className="logo">
            <img src={hamburger} width="30" alt="Logo" onClick={toggleMenu} />
            <h1>Food Express</h1>
          </div>

          <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </header>
      </section>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>✖</button>

        <div className="menu-item">
          <p onClick={() => toggleDropdown("fastfood")}>Fast Food ▾</p>
          {openDropdown === "fastfood" && (
            <div className="dropdown">
              <Link to="/fastfood/burgers">Burgers</Link>
              <Link to="/fastfood/pizza">Pizza</Link>
              <Link to="/fastfood/fries">Fries</Link>
            </div>
          )}
        </div>

        <div className="menu-item">
          <p onClick={() => toggleDropdown("desifood")}>Desi Food ▾</p>
          {openDropdown === "desifood" && (
            <div className="dropdown">
              <Link to="/desifood">Biryani</Link>
              <Link to="/desifood">Karahi</Link>
              <Link to="/desifood">Qorma</Link>
              <Link to="/desifood">Haleem</Link>
            </div>
          )}
        </div>

        <div className="menu-item">
          <p onClick={() => toggleDropdown("sweets")}>Sweets & Drinks ▾</p>
          {openDropdown === "sweets" && (
            <div className="dropdown">
              <Link to="/sweets/desserts">Desserts</Link>
              <Link to="/sweets/drinks">Drinks</Link>
            </div>
          )}
        </div>

        <div className="menu-item">
          <p onClick={() => toggleDropdown("bakery")}>Bakery Items ▾</p>
          {openDropdown === "bakery" && (
            <div className="dropdown">
              <Link to="/bakery">Bread</Link>
              <Link to="/bakery">Donuts</Link>
              <Link to="/bakery">Cookies</Link>
              <Link to="/bakery">Pastry</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

