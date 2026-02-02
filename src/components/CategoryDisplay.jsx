import React from "react";
import "./CategoryDisplay.css";

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
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;
