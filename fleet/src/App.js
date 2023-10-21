import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Signin from './Components/auth/Signin'
import Signup from './Components/auth/Signup'
import Driver from './Components/Driver'
import Complaint from './Components/Complaint'
import DriverList from './Components/DriverList'

function App(){
  return(
    <>
   <BrowserRouter>
   
  <Navbar></Navbar>
   
   <Routes>
    <Route path="/"element={<Home />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/login" element={<Signin />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/driverinfo" element={<Driver />}></Route>
    <Route path="/complaint" element={<Complaint />}></Route>
    <Route path="/driverlist" element={<DriverList />}></Route>
 
    
    
      </Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App