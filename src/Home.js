import React from "react";
import "./Home.css";
import ProdData from "./ProdData";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71frpR+m6LL._SX3000_.jpg"
          alt=""
        />
        <ProdData />
        
      </div>
    </div>
  );
};
export default Home;
