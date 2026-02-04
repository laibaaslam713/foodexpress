

import './App.css';
import CategoryDisplay from "./components/CategoryDisplay";
import { foodData } from "./foodData/FoodData"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    
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
