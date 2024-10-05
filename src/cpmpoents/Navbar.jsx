import React from 'react'
import './Style.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo"><h1>Logo</h1></div>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Cotact</a></li>
        <li><a href="#">Feedback</a></li>
      
    </ul>
    </div>
  )
}

export default Navbar
