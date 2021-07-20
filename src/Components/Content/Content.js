import React from 'react';
import './Content.css';

import Card from "../Card/Card.js"

// data
import {foodCardsData} from "../../Model/FoodCardsData";

const Content = () => (
  <>
      {/* DESKTOP VIEW*/}
      <div className="main">
          <div className="main-title">
            <div className="header">
              What are you <br/>having for lunch?
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              <div className="red-line"></div>
            </div>
          </div>
          <div className="cards">
            {foodCardsData.map((data)=><Card key={data.id} name={data.name} img={data.img}/>)}
          </div>
      </div>
      {/* MOBILE VIEW*/}
      <div className="mobile-main">
        <div className="mobile-heading">
        What are you <br/>having for lunch?
        </div>
        <div className="mobile-cards">
            {foodCardsData.map((data)=><Card key={data.id} name={data.name} img={data.img}/>)}
        </div>
        <div className="mobile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            <div className="red-line"></div>
        </div>
      </div>
  </>
)

export default Content;