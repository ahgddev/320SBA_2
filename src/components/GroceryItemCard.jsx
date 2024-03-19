function GroceryItemCard({ id, title, addFav, buttonHide }) {
  let newFav = { id: id, title: title };
  return (
    <div className="itemCard">
      <p>{id}</p>
      <p>{title}</p>
      <button
        id="favoriteBtn"
        onClick={() => {
          addFav(newFav);
        }}
        style={ buttonHide && {display: "none"}}
      >
        Make Favorite
      </button>
    </div>
  );
}

export default GroceryItemCard;
