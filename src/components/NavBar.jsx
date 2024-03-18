import {Link} from "react-router-dom"

export default function NavBar(props){
  return (
    <div className="nav">
        <Link to="/">
            <h1>Main</h1>
        </Link>
        <Link to="/grocery">
            <h1>Grocery Products</h1>
        </Link>
        <Link to="/menu">
            <h1>Restaraunt Products</h1>
        </Link>
        <Link to="/favorites">
            <h1>Favorited Products</h1>
        </Link>
    </div>
  )
}