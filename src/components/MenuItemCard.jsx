import { createContext, useContext } from "react";
function MenuItemCard({id, title, restaraunt, imageURL}) {
    return (
      <div className="itemCard">
        <img src={imageURL} alt={title + " image"} />
        <p>{id}</p>
        <p>{title}</p>
        <p>{restaraunt}</p>
        <button id="favoriteBtn">Make Favorite</button>    
      </div>
    )
  }
  
  export default MenuItemCard