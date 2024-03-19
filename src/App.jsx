import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Grocery from "./pages/Grocery";
import Menu from "./pages/Menu";
import Favorites from "./pages/Favorites";

function App() {
  const [menuFavorites, setMenuFavorites] = useState([]);
  const [groceryFavorites, setGroceryFavorites] = useState([]);

  function addGroceryFavorite(fav) {
    setGroceryFavorites(groceryFavorites.concat(fav));
  }

  function addMenuFavorite(fav) {
    setMenuFavorites(menuFavorites.concat(fav));
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route
          path="/grocery"
          element={<Grocery addFunc={addGroceryFavorite} />}
        >
          Find Grocery Products
        </Route>
        <Route path="/menu" element={<Menu addFunc={addMenuFavorite} />}>
          Find Restaraunt Products
        </Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              groceryFavs={groceryFavorites}
              menuFavs={menuFavorites}
            />
          }
        >
          Favorites
        </Route>
      </Routes>
    </>
  );
}

export default App;
