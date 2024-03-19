import { createContext, useContext } from "react";

function GroceryItemCard({id, title, favs}) {
  return (
    <div className="itemCard">
      <p>{id}</p>
      <p>{title}</p>
      <button id="favoriteBtn" >Make Favorite</button>    
    </div>
  )
}

export default GroceryItemCard