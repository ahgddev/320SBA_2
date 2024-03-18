function MenuItemCard({id, title, restaraunt, imageURL}) {
    return (
      <div className="itemCard">
        <img src={imageURL} alt={title + " image"} />
        <p>{id}</p>
        <p>{title}</p>
        <p>{restaraunt}</p>    
      </div>
    )
  }
  
  export default MenuItemCard