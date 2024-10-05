import React, { useEffect } from "react";
import "./Style.css";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  useEffect(() => {
    // Selecting elements after the component mounts
    const menuToggle = document.querySelector("#menuToggle");
    const list = document.querySelector("#list");

    // Event listener for toggle functionality
    const toggleMenu = () => {
      if (list.style.display === "block") {
        list.style.display = "none";
      } else {
        list.style.display = "block";
      }
    };

    // Add event listener to menuToggle
    menuToggle.addEventListener("click", toggleMenu);

    // Cleanup event listener when component unmounts
    return () => {
      menuToggle.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="nav">
      <div className="logo">
     <img src="/images/logo.png"></img>
      </div>
      <ul id="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </ul>
      <i id="menuToggle">
        <IoMdMenu />
      </i>
    </div>
  );
};

export default Navbar;
