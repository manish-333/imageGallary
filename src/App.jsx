import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './cpmpoents/Navbar'
import Cart from './cpmpoents/Cart'
import Hero from './cpmpoents/Hero'
import MoreCart from './cpmpoents/MoreCart'
import Cartnext from './cpmpoents/Cartnext'




function App() {


  return (
    <>
 <div>
 <Navbar></Navbar>
 <Hero></Hero>
 <Cart></Cart>
 <MoreCart ></MoreCart>
<Cartnext></Cartnext>

 </div>
    </>
  )
}

export default App
