import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Grocery from "./pages/Grocery"
import Menu from "./pages/Menu"
import Favorites from "./pages/Favorites"

function App() {

  return (
    <>
    <NavBar />
    <h1>Main Page</h1>
    <Routes>
      <Route path="/grocery" element={<Grocery />}>Find Grocery Products</Route>
      <Route path="/menu" element={<Menu />}>Find Restaraunt Products</Route>
      <Route path="/favorites" element={<Favorites />}>Favorites</Route>
    </Routes>
  
    </>
  )
}

export default App
