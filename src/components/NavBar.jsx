import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/grocery">
        <h1>Grocery Products</h1>
      </Link>
      <Link to="/menu">
        <h1>Restaraunt Menus</h1>
      </Link>
      <Link to="/favorites">
        <h1>Favorites</h1>
      </Link>
    </div>
  );
}
