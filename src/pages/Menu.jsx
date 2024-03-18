import { useParams } from "react-router-dom"
import MenuItemCard from "../components/MenuItemCard"

function Menu() {
  return (
    <div id="menuContainer">
        <h1>Menu Page</h1>
        <input type="search" name="searchbar" id="searchBar" />
        <button id="searchBtn">Search</button>
        <section id="menuResults"></section>
    </div>
  )
}

export default Menu