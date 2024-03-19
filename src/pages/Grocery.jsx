import { useState, useEffect} from "react";
import axios from "axios";
import GroceryItemCard from "../components/GroceryItemCard";

function Grocery() {
  const [groceryData, setGroceryData] = useState();
  const [searchQuery, setSearchQuery] = useState("pizza");
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  async function dataGrabber() {
    setLoading(true);
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
      <h1>Grocery Page</h1>
      <input
        type="search"
        name="searchbar"
        id="searchBar"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button id="searchBtn" onClick={dataGrabber}>
        Search
      </button>
      {loading ? (
        <div>
          <p>Loading data...</p>
        </div>
      ) : null}
      <section id="groceryResults">
        {groceryData?.map((groceryItems) => {
          return (
            <GroceryItemCard key={groceryItems.id} id={groceryItems.id} title={groceryItems.title}/>
          );
        })}
        <button
          id="backBtn"
          onClick={() => {
            setPageNumber(pageNumber == 5 ? 0 : pageNumber - 5);
          }}
        >
          Back
        </button>
        <button
          id="nextBtn"
          onClick={() => {
            setPageNumber(pageNumber + 5);
          }}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default Grocery;
