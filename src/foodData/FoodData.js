import fastfood from "../assets/fastfood.jpg";
import desifood from "../assets/fastfood.jpg"; // change later
import sweets from "../assets/fastfood.jpg";
import bakery from "../assets/fastfood.jpg";
import zingerBurger from "../assets/zinger-burger.jpg";
import beefBurger from "../assets/beef-burger.jpg";
import fishBurger from "../assets/Fish-burger.jpg";
import doublePattyBurger from "../assets/Double-Patty-Burger.png";
import cheeseBurger from "../assets/cheese-burger.png";
import veggieBurger from "../assets/veggie-burger.jpg";
import bbqBurger from "../assets/bbq-burger.png";
import mashroomSwissBurger from "../assets/mashroom-swiis-burger.jpg";
import eggBurger from "../assets/egg-burger.jpg";
import pepperoniPizza from "../assets/pepporoni-pizza.jpg";

export const foodData = {
  fastfood: {
    title: "Fast Food Items",

    burgers: {
      title: "Burgers",
      items: [
        { name: "Zinger Burger", price: "Rs. 450", img: zingerBurger },
        { name: "Beef Burger", price: "Rs. 500", img: beefBurger},
        { name: "Fish Burger", price: "Rs. 480", img: fishBurger },
        { name: "Double Patty Burger", price: "Rs. 400", img: doublePattyBurger },
        { name: "Cheese Burger", price: "Rs. 400", img: cheeseBurger },
        { name: "Veggie Burger", price: "Rs. 400", img: veggieBurger },
        { name: "BBQ Burger", price: "Rs. 400", img: bbqBurger },
        { name: "Mushroom Swiss Burger", price: "Rs. 400", img: mashroomSwissBurger },
        { name: "Egg Burger", price: "Rs. 400", img: eggBurger }
      ],
    },

    pizza: {
  title: "Pizza",
  items: [
    { name: "Pepperoni Pizza", price: "Rs. 1400", img: pepperoniPizza },
    { name: "BBQ Chicken Pizza", price: "Rs. 1500", img: fastfood },
    { name: "Veggie Pizza", price: "Rs. 1300", img: fastfood },
    { name: "Tandoori Chicken Pizza", price: "Rs. 1550", img: fastfood },
    { name: "Fajita Pizza", price: "Rs. 1350", img: fastfood },
  ],
},


    fries: {
      title: "Fries",
      items: [
        { name: "Simple Fries", price: "Rs. 300", img: fastfood },
        { name: "Masala Fries", price: "Rs. 350", img: fastfood },
        { name: "Masala Fries", price: "Rs. 350", img: fastfood },
        { name: "Masala Fries", price: "Rs. 350", img: fastfood },
      ],
    },
  },

  desifood: {
     title: "Desi Food Items",
      items: [ { name: "Biryani", price: "Rs. 250", img: desifood },
         { name: "Karahi", price: "Rs. 900", img: desifood }, 
         { name: "Qorma", price: "Rs. 800", img: desifood },
          { name: "Haleem", price: "Rs. 180", img: desifood }, ], },

  sweets: {
    title: "Sweets & Drinks",

    cakesDesserts: {
      title: "Desserts",
      items: [
        { name: "Chocolate Cake", price: "Rs. 1200", img: sweets },
        { name: "Pastry", price: "Rs. 250", img: sweets },
        { name: "Ice Cream", price: "Rs. 150", img: sweets },
      ],
    },

    drinks: {
      title: "Drinks",
      items: [
        { name: "Fresh Juice", price: "Rs. 180", img: sweets },
        { name: "Milkshake", price: "Rs. 350", img: sweets },
        { name: "Cold Drink", price: "Rs. 120", img: sweets },
      ],
    },
  },

  bakery: { 
    title: "Bakery Items", 
    items: [ { name: "Bread", price: "Rs. 120", img: bakery }, 
      { name: "Donuts", price: "Rs. 200", img: bakery }, 
      { name: "Cookies", price: "Rs. 300", img: bakery }, 
      { name: "Pastry", price: "Rs. 250", img: bakery }, ],
     },
};

