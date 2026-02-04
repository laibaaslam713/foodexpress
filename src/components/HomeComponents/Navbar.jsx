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
// import hamburger from "../../assets/hamburger.png";
import { Link } from "react-router-dom";
import fastfood from "..//../assets/zinger-burger.jpg";
import desifood from "..//../assets/haleem.jpg";
import sweetndrinks from "..//../assets/brownie.jpg";
import bakery from "../../assets/croissant.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <header>
          <div className="logo">
            {/* <img src={hamburger} width="30" alt="Logo" onClick={toggleMenu} /> */}
            <h1>Food Express</h1>
          </div>

          <div id="navbar">
            <Link to="/">Home</Link>
            <div
          className="menu-wrapper"
          onMouseEnter={() => setMenuOpen(true)}
        >
          <span className="menu-link">Menu</span>

          {menuOpen && (
            <div className="mega-menu" onMouseLeave={() => setMenuOpen(false)}>
              <div className="menu-column">
                <img src={fastfood} />
                <h4>Fast Food</h4>
                <Link to="/fastfood/burgers">Burgers</Link>
                <Link to="/fastfood/pizza">Pizza</Link>
                <Link to="/fastfood/fries">Fries</Link>
              </div>

              <div className="menu-column">
                <img src={desifood} />
                <h4>Desi Food</h4>
                <Link to="/desifood">View Items</Link>
              </div>

              <div className="menu-column">
                <img src={sweetndrinks} />
                <h4>Sweets</h4>
                <Link to="/sweets/desserts">Desserts</Link>
                <Link to="/sweets/drinks">Drinks</Link>
              </div>

              <div className="menu-column">
                <img src={bakery} />
                <h4>Bakery</h4>
                <Link to="/bakery">View Items</Link>
              </div>
            </div>
          )}
        </div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            
          </div>
        </header>
      </section>

      {/* <div className={`side-menu ${menuOpen ? "open" : ""}`}>
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
          <Link  to= "/desifood"><p>Desi Food</p></Link>
          
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
          <Link to="/bakery"><p>Bakery Items</p></Link>
          
        </div>
      </div> */}
    </>
  );
};

export default Navbar;

