import Product from './components/Product'
import './App.css'
import Navbar from './components/navbar'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'


function App() {
 
 

  return  <>


  <Navbar/>
  <Outlet/>
      <Product/>
      <Footer/>
     </>
     
}

export default App
