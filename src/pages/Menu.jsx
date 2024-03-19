import { useState, useEffect } from "react";
import axios from "axios";
import MenuItemCard from "../components/MenuItemCard";

function Menu({ addFunc }) {
  const [menuData, setMenuData] = useState();
  const [searchQuery, setSearchQuery] = useState("burger");
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  async function dataGrabber() {
    setLoading(true);
    const options = {
      params: {
        query: searchQuery,
        number: "7",
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
      setLoading(false);
    } catch (error) {
      console.error(error.response);
    }
  }

  useEffect(() => {
    dataGrabber();
  }, [pageNumber]);

  return (
    <div id="menuContainer">
      <h1>Restaraunt Menu</h1>
      <div id="searchSection">
      <input
        type="search"
        name="searchbar"
        id="searchBar"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button id="searchBtn" onClick={dataGrabber}>
        Search
      </button>
      </div>
      {loading ? (
        <div id="loadingScreen">
          <p>Loading data...</p>
        </div>
      ) : null}
      <section id="menuResults">
        {menuData?.map((menuItems) => {
          return (
            <MenuItemCard
            className="cardItem"
              key={menuItems.id}
              imageURL={menuItems.image}
              id={menuItems.id}
              title={menuItems.title}
              restaraunt={menuItems.restarauntChain}
              addFav={addFunc}
            />
          );
        })}

      </section>
      <div id="progressButtons">
        <button
          id="backBtn"
          onClick={() => {
            setPageNumber(pageNumber == 7 ? 0 : pageNumber - 7);
          }}
        >
          Back
        </button>
        <button
          id="nextBtn"
          onClick={() => {
            setPageNumber(pageNumber + 7);
          }}
        >
          Next
        </button>
        </div>
    </div>
  );
}

export default Menu;
