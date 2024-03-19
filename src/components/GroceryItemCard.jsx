function GroceryItemCard({id, title, addFav}) {
  let newFav = {"id": id, "title": title}
  return (
    <div className="itemCard">
      <p>{id}</p>
      <p>{title}</p>
      <button id="favoriteBtn" onClick={() => {addFav(newFav)}}>Make Favorite</button>    
    </div>
  )
}

export default GroceryItemCard