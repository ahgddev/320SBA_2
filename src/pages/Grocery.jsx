import {useParams} from "react-router-dom"
import GroceryItemCard from "../components/GroceryItemCard"

function Grocery() {
  return (
    <div id="groceryContainer">
        <h1>Grocery Page</h1>
        <input type="search" name="searchbar" id="searchBar" />
        <button id="searchBtn">Search</button>
        <section id="groceryResults"></section>
    </div>
  )
}

export default Grocery