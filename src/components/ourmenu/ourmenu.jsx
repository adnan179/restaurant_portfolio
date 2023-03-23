import React from "react";
import ImgLoop from "./imgloop";
import './ourmenu.css';
import { useState } from "react";
const OurMenu = ({handleChange}) =>{
  return(
    <section>
      <div className="app__ourmenu-container">
        <div className="app__ourmenu-headings">
          <h1>Our Menu</h1>
          <h3>"Discover our culinary delights and savor the flavors of our chef's specialties."" </h3>
          <button className="app__ourmenu-btn"
            onClick={()=>{
              handleChange(true);
              window.scrollTo({top:0,left:0,behavior:'smooth'});
            }}
          >Indulge in our options</button>
        </div>
        <div className="app__ourmenu-dishes">
          <ImgLoop/>
        </div>
      </div>
    </section>
  )
}
export default OurMenu;