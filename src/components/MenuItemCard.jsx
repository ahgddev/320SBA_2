function MenuItemCard({ id, title, restaraunt, imageURL, addFav }) {
  let newFav = {
    id: id,
    title: title,
    restaraunt: restaraunt,
    imageURL: imageURL,
  };
  return (
    <div className="itemCard">
      <img src={imageURL} alt={title + " image"} />
      <p>{id}</p>
      <p>{title}</p>
      <p>{restaraunt}</p>
      <button
        id="favoriteBtn"
        onClick={() => {
          addFav(newFav);
        }}
      >
        Make Favorite
      </button>
    </div>
  );
}

export default MenuItemCard;
