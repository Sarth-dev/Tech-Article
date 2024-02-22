/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Explore from './component/Explore'
import Techtopic from './component/Techtopic'
import Contact from './component/Contact'
import Footer from './component/Footer'


function App() {
  
  return (
    <div>
      <Navbar/>
      <Explore/>
      <Techtopic/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
