 import Categories from './HomeComponents/Categories';
import fastfood from "../assets/fastfood.jpg";
import DesiFood from "../assets/DesiFood.jpg";
import BakeryItems from "../assets/BakeryItems.jpg"
import Desserts from "../assets/Desserts.jpg"
import Navbar from './HomeComponents/Navbar';

const Home = () => {
  return (
    <>
       <Navbar/>

      <div className="categories-container">
        <h1>Our Categories</h1>
        <div className="categories-wrapper">
            <Categories foodTitle = "Fast Food" description="Quick, tasty, and full of flavor. Enjoy burgers, fries, and snacks that are freshly made and served hot for instant hunger relief." img={fastfood}/>
            <Categories foodTitle = "Bakery Items" description="Freshly baked breads, cakes, cookies and pastries made with love. Soft, sweet, and perfect for breakfast or tea time." img={BakeryItems}/>
            <Categories foodTitle = "Desi Food" description="Traditional desi meals cooked with rich spices and authentic taste. A perfect choice for homestyle and hearty food lovers." img={DesiFood}/>
            <Categories foodTitle = "Desserts and Drinks" description="Sweet desserts and refreshing drinks to brighten your day. A perfect mix of sweetness and chill for every mood." img={Desserts}/>
        </div>
      </div>
    </>
  )
}

export default Home