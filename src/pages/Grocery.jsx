import { useState, useEffect } from "react";
import axios from "axios";
import GroceryItemCard from "../components/GroceryItemCard";
import "../App.css";

function Grocery({ addFunc }) {
  const [groceryData, setGroceryData] = useState();
  const [searchQuery, setSearchQuery] = useState("pizza");
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
        "https://api.spoonacular.com/food/products/search",
        options
      );
      setGroceryData(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error(error.response);
    }
  }

  useEffect(() => {
    dataGrabber();
  }, [pageNumber]);

  return (
    <div id="groceryContainer">
      <h1>Grocery Products</h1>
      <div id="searchSection">
        {" "}
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
      <section id="groceryResults">
        {groceryData?.map((groceryItems) => {
          return (
            <GroceryItemCard
              className="cardItem"
              key={groceryItems.id}
              id={groceryItems.id}
              title={groceryItems.title}
              addFav={addFunc}
            />
          );
        })}
      </section>
      <div id="progressButtons">
          {" "}
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

export default Grocery;
