import { useState, useEffect } from "react";
import axios from "axios";
import MenuItemCard from "../components/MenuItemCard";


function Menu() {
  const [menuData, setMenuData] = useState();
  const [searchQuery, setSearchQuery] = useState("burger");

  async function dataGrabber() {
    const options = {
      params: {
        query: searchQuery,
        number: "5",
        offset: 0,
      },
      headers: {
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    };
    try {
      let response = await axios.get(
        "https://api.spoonacular.com/food/menuItems/search",
        options
      );
      setMenuData(response.data.menuItems);
    } catch (error) {
      console.error(error.response);
    }
  }

  useEffect(() => {
    dataGrabber();
  }, []);

  return (
    <div id="menuContainer">
      <h1>Menu Page</h1>
      <input
        type="search"
        name="searchbar"
        id="searchBar"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button id="searchBtn" onClick={dataGrabber}>
        Search
      </button>
      <section id="menuResults">
        {menuData?.map((menuItems) => {
          {
            console.log("Currently " + JSON.stringify(menuItems));
          }
          return (
            <MenuItemCard
              imageURL={menuItems.image}
              id={menuItems.id}
              title={menuItems.title}
              restaraunt={menuItems.restarauntChain}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Menu;
