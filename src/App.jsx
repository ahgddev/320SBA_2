import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import dataGrabber from "./data/server"
import './App.css'
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import Grocery from "./pages/Grocery"
import Menu from "./pages/Menu"
import Favorites from "./pages/Favorites"


function App() {

  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />}>Home</Route>
      <Route path="/grocery" element={<Grocery />}>Find Grocery Products</Route>
      <Route path="/menu" element={<Menu />}>Find Restaraunt Products</Route>
      <Route path="/favorites" element={<Favorites />}>Favorites</Route>
    </Routes>
  
    </>
  )
}

export default App
