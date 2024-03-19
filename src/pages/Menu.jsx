import { useState, useEffect } from "react";
import axios from "axios";
import MenuItemCard from "../components/MenuItemCard";


function Menu() {
  const [menuData, setMenuData] = useState();
  const [searchQuery, setSearchQuery] = useState("burger");
  const [pageNumber, setPageNumber] = useState(0)

  async function dataGrabber() {
    const options = {
      params: {
        query: searchQuery,
        number: "5",
        offset: pageNumber,
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
    
  }, [pageNumber]);

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
          return (
            <MenuItemCard
              imageURL={menuItems.image}
              id={menuItems.id}
              title={menuItems.title}
              restaraunt={menuItems.restarauntChain}
            />
          );
        })}
        <button id="backBtn" onClick={() => {setPageNumber(pageNumber == 5 ? 0 : pageNumber - 5)}}>Back</button>
        <button id="nextBtn" onClick={() => {setPageNumber(pageNumber + 5)}}>Next</button>
      </section>
    </div>
  );
}

export default Menu;
