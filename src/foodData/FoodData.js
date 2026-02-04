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
import bbqPizza from "../assets/bbq-pizza.png";
import veggiePizza from "../assets/vegetable-pizza.png";
import tandooriChickenPizza from "../assets/tandoori-chicken-pizza.jpg";
import fajitaPizza from "../assets/fajita-pizza.png";
import frenchFries from "../assets/frenchFries.png";
import curlyFries from "../assets/curlyFries.jfif";
import waffleFries from "../assets/waffleFries.jfif";
import steakFries from "../assets/steakFries.jfif";
import shoestringFries from "../assets/shoestringFries.jfif";
import loadedFries from "../assets/loadedFries.jpg";
import garlicPermesanFries from "../assets/garlicPermesanFries.jfif";
import biryani from "../assets/biryani.jfif";
import nihari from "../assets/nihari.jfif";
import haleem from "../assets/haleem.jpg";
import chickenKarahi from "../assets/chickenKarahi.jfif";
import chapliKabab from "../assets/chapliKaba.jpg";
import seekhKabab from "../assets/seekhKabab.jpg";
import alooGosht from "../assets/alooGosht.png";
import samosa from "../assets/samosa.jpg";
import gulabJamun from "../assets/gulabJamun.jfif";
import jalebi from "../assets/jalebi.png";
import cheeseCake from "../assets/cheeseCake.png";
import barfi from "../assets/barfi.png";
import kheer from "../assets/kheer.png";
import rasmalai from "../assets/rasMalai.png";
import donuts from "../assets/donuts.png";
import icecream from "../assets/icecream.png";
import brownie from "../assets/brownie.jpg";
import coffee from "../assets/coffee.png";
import lemonade from "../assets/lemonade.png";
import freshJuice from "../assets/freshJauice.png";
import milkshake from "../assets/milkshake.png";
import energyDrink from "../assets/energyDrink.png";
import softDrink from "../assets/softDrink.png";
import smoothie from "../assets/smoothie.png";
import bread from "../assets/bread.png";
import buns from "../assets/buns.png";
import croissant from "../assets/croissant.png";
import muffins from "../assets/muffins.png";
import cupcakes from "../assets/cupcakes.png";
import cookies from '../assets/cookies.png';
import pie from "../assets/pie.png";


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
    { name: "BBQ Chicken Pizza", price: "Rs. 1500", img: bbqPizza },
    { name: "Veggie Pizza", price: "Rs. 1300", img: veggiePizza },
    { name: "Tandoori Chicken Pizza", price: "Rs. 1550", img: tandooriChickenPizza },
    { name: "Fajita Pizza", price: "Rs. 1350", img: fajitaPizza },
  ],
},


    fries: {
  title: "Fries",
  items: [
    { name: "Classic French Fries", price: "Rs. 300", img: frenchFries },
    { name: "Curly Fries", price: "Rs. 350", img: curlyFries },
    { name: "Waffle Fries", price: "Rs. 350", img: waffleFries },
    { name: "Steak Fries", price: "Rs. 400", img: steakFries },
    { name: "Shoestring Fries", price: "Rs. 300", img: shoestringFries },
    { name: "Loaded Fries", price: "Rs. 450", img: loadedFries },
    { name: "Garlic Parmesan Fries", price: "Rs. 400", img: garlicPermesanFries },
  ],
},

  },

  desifood: {
  title: "Desi Food Items",
  items: [
    { name: "Biryani", price: "Rs. 250", img: biryani },
    { name: "Nihari", price: "Rs. 350", img: nihari },
    { name: "Haleem", price: "Rs. 180", img: haleem },
    { name: "Karahi Chicken", price: "Rs. 900", img: chickenKarahi },
    { name: "Seekh Kebabs", price: "Rs. 400", img: seekhKabab },
    { name: "Samosa", price: "Rs. 50", img: samosa },
    { name: "Chapli Kebab", price: "Rs. 300", img: chapliKabab },
    { name: "Aloo Gosht", price: "Rs. 500", img: alooGosht },
  ],
},


  sweets: {
    title: "Sweets & Drinks",

    cakesDesserts: {
      title: "Desserts",
      items: [
        { name: "Gulab Jamun", price: "Rs. 150", img: gulabJamun },
        { name: "Jalebi", price: "Rs. 120", img: jalebi },
        { name: "Rasmalai", price: "Rs. 200", img: rasmalai },
        { name: "Barfi", price: "Rs. 180", img: barfi },
        { name: "Ice Cream", price: "Rs. 100", img: icecream },
        { name: "Kheer", price: "Rs. 150", img: kheer },
        { name: "Cheese Cake", price: "Rs. 120", img: cheeseCake },
        { name: "Brownie", price: "Rs. 180", img: brownie },
        { name: "Donuts", price: "Rs. 150", img: donuts },
      ],
    },


    drinks: {
      title: "Drinks",
      items: [
        { name: "Coffee", price: "Rs. 200", img: coffee },
        { name: "Fresh Juice", price: "Rs. 180", img: freshJuice },
        { name: "Smoothie", price: "Rs. 300", img: smoothie },
        { name: "Milkshake", price: "Rs. 350", img: milkshake },
        { name: "Soft Drink", price: "Rs. 120", img: softDrink },
        { name: "Lemonade", price: "Rs. 150", img: lemonade },
        { name: "Energy Drink", price: "Rs. 250", img: energyDrink }
      ]
    }

  },

  bakery: { 
    title: "Bakery Items", 
    items: [
      { name: "Bread", price: "Rs. 120", img: bread },
      { name: "Buns", price: "Rs. 100", img: buns },
      { name: "Croissant", price: "Rs. 180", img: croissant },
      { name: "Muffin", price: "Rs. 150", img: muffins },
      { name: "Donuts", price: "Rs. 200", img: donuts },
      { name: "Cupcakes", price: "Rs. 220", img: cupcakes },
      { name: "Cookies", price: "Rs. 300", img: cookies },
      { name: "Brownies", price: "Rs. 250", img: brownie },
      { name: "Pie", price: "Rs. 350", img: pie },
    ]
  }

};

