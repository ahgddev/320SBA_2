import { useParams } from "react-router-dom"
function Menu() {
  return (
    <div>
        <h1>Menu Page</h1>
        <input type="search" name="searchbar" id="searchBar" />
        <button id="searchBtn">Search</button>
    </div>
  )
}

export default Menu