import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'

function App(){
  return(
    <>
   <BrowserRouter>
   <Navbar />
   
   <Routes>
    <Route path="/"element={<Home />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/about" element={<About />}></Route>
 
    
    
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App