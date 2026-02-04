import React from "react";
import "./CategoryDisplay.css";
import {FaWhatsapp } from "react-icons/fa";

const CategoryDisplay = ({ title, items }) => {
  return (
    <div className="category-page">
      <h2 className="category-title">{title}</h2>

      <div className="food-grid">
        {items.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <a href="https://wa.me/923121494114" target="_blank" rel="noopener noreferrer">
      <button><FaWhatsapp className="icon" />Order on Whatsapp</button>
    </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;
