// import './App.css';
// import Navbar from './components/Navbar';
// import Categories from './components/Categories';
// import fastfood from "./assets/fastfood.jpg";
// import DesiFood from "./assets/DesiFood.jpg";
// import BakeryItems from "./assets/BakeryItems.jpg"
// import Desserts from "./assets/Desserts.jpg"
// import CategoryDisplay from "./components/CategoryDisplay";
// import { foodCategories } from "./data/foodData";

// function App() {
//   return (
//     <>
//       <Navbar/>
//       <CategoryDisplay
//         title={foodCategories.fastfood.title}
//         items={foodCategories.fastfood.items}
//       />
//       <div className="categories-container">
//         <h1>Our Categories</h1>
//         <div className="categories-wrapper">
//             <Categories foodTitle = "Fast Food" description="Quick, tasty, and full of flavor. Enjoy burgers, fries, and snacks that are freshly made and served hot for instant hunger relief." img={fastfood}/>
//             <Categories foodTitle = "Bakery Items" description="Freshly baked breads, cakes, cookies and pastries made with love. Soft, sweet, and perfect for breakfast or tea time." img={BakeryItems}/>
//             <Categories foodTitle = "Desi Food" description="Traditional desi meals cooked with rich spices and authentic taste. A perfect choice for homestyle and hearty food lovers." img={DesiFood}/>
//             <Categories foodTitle = "Desserts and Drinks" description="Sweet desserts and refreshing drinks to brighten your day. A perfect mix of sweetness and chill for every mood." img={Desserts}/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/HomeComponents/Navbar';
import Categories from './components/HomeComponents/Categories';
import fastfood from "./assets/fastfood.jpg";
import DesiFood from "./assets/DesiFood.jpg";
import BakeryItems from "./assets/BakeryItems.jpg";
import Desserts from "./assets/Desserts.jpg";
import CategoryDisplay from "./components/CategoryDisplay";
import { foodData } from "./foodData/FoodData"; // make sure it's foodData, not foodCategories
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    // <Router>
    //   <Navbar />

    //   <Routes>
    //     {/* Home page */}
    //     <Route path="/" element={
    //       <div className="categories-container">
    //         <h1>Our Categories</h1>
    //         <div className="categories-wrapper">
    //           <Categories foodTitle="Fast Food" description="Quick, tasty, and full of flavor..." img={fastfood} />
    //           <Categories foodTitle="Bakery Items" description="Freshly baked breads, cakes..." img={BakeryItems} />
    //           <Categories foodTitle="Desi Food" description="Traditional desi meals cooked..." img={DesiFood} />
    //           <Categories foodTitle="Desserts & Drinks" description="Sweet desserts and refreshing drinks..." img={Desserts} />
    //         </div>
    //       </div>
    //     } />

    //     {/* Category pages */}
    //     <Route path="/fastfood" element={<CategoryDisplay title={foodData.fastfood.title} items={foodData.fastfood.items} />} />
    //     <Route path="/desifood" element={<CategoryDisplay title={foodData.desifood.title} items={foodData.desifood.items} />} />
    //     <Route path="/sweets" element={<CategoryDisplay title={foodData.sweets.title} items={foodData.sweets.items} />} />
    //     <Route path="/bakery" element={<CategoryDisplay title={foodData.bakery.title} items={foodData.bakery.items} />} />
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path="/fastfood/burgers" element={
      <CategoryDisplay 
        title={foodData.fastfood.burgers.title} 
        items={foodData.fastfood.burgers.items} 
      />} 
    />

    <Route path="/fastfood/pizza" element={
      <CategoryDisplay 
        title={foodData.fastfood.pizza.title} 
        items={foodData.fastfood.pizza.items} 
      />} 
    />

    <Route path="/fastfood/fries" element={
      <CategoryDisplay 
        title={foodData.fastfood.fries.title} 
        items={foodData.fastfood.fries.items} 
      />} 
    />
        <Route path="/desifood" element={
      <CategoryDisplay 
        title={foodData.desifood.title} 
        items={foodData.desifood.items} 
      />} 
    />
        <Route path="/sweets/desserts" element={
      <CategoryDisplay 
        title={foodData.sweets.cakesDesserts.title} 
        items={foodData.sweets.cakesDesserts.items} 
      />} 
    />

    <Route path="/sweets/drinks" element={
      <CategoryDisplay 
        title={foodData.sweets.drinks.title} 
        items={foodData.sweets.drinks.items} 
      />} 
    />

    {/* BAKERY */}
    <Route path="/bakery" element={
      <CategoryDisplay 
        title={foodData.bakery.title} 
        items={foodData.bakery.items} 
      />} 
    />
      </Routes>
    </Router>
  );
}

export default App;
