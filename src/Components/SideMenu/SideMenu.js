import React, { useState } from "react";
import "./SideMenu.css";
import CartIcon from "../../Model/cart.png";


const SideMenu = () => {
  const [sideBar, toggleSideBar] = useState(true);
  const handleToggle = () => {
    document.querySelector(".Side-Menu").classList.toggle("show")
    toggleSideBar(!sideBar);
    console.log("click")
   };
  return (
  <div className="container">
    <div className="app-bar">
      <div className="options" onClick={handleToggle}>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
      <div className="heading">Lorem</div>
      <div className="cart">
        <img src={CartIcon} alt="cart-icon" />
      </div>
    </div>
      <div className="Side-Menu">
        <div className="list-title">
          <h1>
            Lorem
            <br />
            Ipsum
          </h1>
        </div>
        <ul>
          {["About", "Services", "Cuisine", "Gallery", "Contact", "Book"].map(
            (item, i) => (
              item !== "About" ?
              <li key={i}>{item}</li>
              :
              <li className="line-through" key={i}>{item}</li>
            )
          )}
        </ul>
        <div className="cart-btn">Cart</div>
      </div>
  </div>
)};

export default SideMenu;
