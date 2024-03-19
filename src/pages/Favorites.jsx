import { useState, useEffect } from "react";
import MenuItemCard from "../components/MenuItemCard";
import GroceryItemCard from "../components/GroceryItemCard";

function Favorites({ groceryFavs, menuFavs }) {
  const [warnMsg, setWarnMsg] = useState("");
  console.log(groceryFavs);
  console.log(menuFavs);
  function showDefaults() {
    if (!groceryFavs && !menuFavs) {
      setWarnMsg(
        "You haven't made any favorites yet! Favorite some items then come back and check this page."
      );
    } else if (!groceryFavs) {
      setWarnMsg("No grocery favorites");
    } else if (!menuFavs) {
      setWarnMsg("No menu favorites");
    }
  }

  useEffect(() => {
    showDefaults();
  }, []);

  return (
    <>
      <section id="favoritesHeader">
        <h1>Your Favorite Grocery and Menu Items!</h1>
      </section>
      <div id="groceryFavsContainer">
        <h1>Grocery Favorites</h1>
        {!groceryFavs ? warnMsg : null}
        {groceryFavs?.map((groceryItems) => {
          return (
            <GroceryItemCard
              key={groceryItems.id}
              id={groceryItems.id}
              title={groceryItems.title}
            />
          );
        })}
      </div>
      <div id="menuFavsContainer">
        <h1>Menu Favorites</h1>
        {!menuFavs ? warnMsg : null}
        {menuFavs?.map((menuItems) => {
          return (
            <MenuItemCard
              key={menuItems.id}
              imageURL={menuItems.imageURL}
              id={menuItems.id}
              title={menuItems.title}
              restaraunt={menuItems.restarauntChain}
            />
          );
        })}
      </div>
    </>
  );
}

export default Favorites;
