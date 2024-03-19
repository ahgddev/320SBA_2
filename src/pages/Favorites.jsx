import { createContext, useContext } from "react";

function Favorites() {
  const menuFavorites = useContext(FavoritesContext[0]);
  const groceryFavorites = useState(FavoritesContext[1]);

  return (
    <div>Favorites Page</div>
  )
}

export default Favorites