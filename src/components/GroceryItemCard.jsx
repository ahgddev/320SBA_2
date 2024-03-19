function GroceryItemCard({id, title}) {
  return (
    <div className="itemCard">
      <p>{id}</p>
      <p>{title}</p>
      <button id="favoriteBtn">Make Favorite</button>    
    </div>
  )
}

export default GroceryItemCard