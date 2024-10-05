import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './cpmpoents/Navbar'
import Cart from './cpmpoents/Cart'
import Hero from './cpmpoents/Hero'

function App() {


  return (
    <>
 <div>
 <Navbar></Navbar>
 <Hero></Hero>
 <Cart></Cart>

 </div>
    </>
  )
}

export default App
