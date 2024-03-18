import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import dataGrabber from "../data/server";
import MenuItemCard from "../components/MenuItemCard";
const test = [
  {
    id: 306187,
    image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
    restaurantChain: "Garfield's Restaurant & Pub",
    servings: { number: 1, size: null, unit: null },
    title: "Burger",
  },
  {
    id: 247615,
    image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
    imageType: "jpg",
    restaurantChain: "Max & Erma's",
    servings: { number: 1, size: null, unit: null },
    title: "Tony's Bodacious Burger w/ Fries, Max",
  },
  {
    id: 381778,
    image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
    imageType: "jpg",
    restaurantChain: "Sam & Louie's Ny Pizza",
    servings: { number: 1, size: null, unit: null },
    title: "Cowboy Burger",
  },
  {
    id: 370301,
    image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
    imageType: "jpg",
    restaurantChain: "De Dutch Pannekoek House",
    servings: { number: 1, size: 231, unit: "grams" },
    title: "Plain Jane Burger, Chicken",
  },
  {
    id: 321356,
    image: "https://spoonacular.com/menuItemImages/hamburger.jpg",
    imageType: "jpg",
    restaurantChain: "Ninety Nine Restaurants",
    servings: { number: 1, size: null, unit: null },
    title: "99 Top a Burger, Sauteed Peppers, 2 oz",
  },
];

function Menu() {
  const [menuData, setMenuData] = useState(test);

  return (
    <div id="menuContainer">
      <h1>Menu Page</h1>
      <input type="search" name="searchbar" id="searchBar" />
      <button id="searchBtn">Search</button>
      <section id="menuResults">
        {menuData.map((menuItems) => (
          <MenuItemCard
            imageURL={menuItems.image}
            id={menuItems.id}
            title={menuItems.title}
            restaraunt={menuItems.restarauntChain}
          />
        ))}
      </section>
    </div>
  );
}

export default Menu;
