import React from "react";
import "./Home.css";
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
        <div className="home__row">
          <Product
            key={100}
            id={3203203}
            title="Sandisk USB 64GB Pendrive"
            price={9.55}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg"
          />
          <Product
            id={3203243}
            key={101}
            title="Sandisk USB 64GB Pendrive"
            price={894}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={320320}
            key={102}
            title="Sandisk USB 64GB Pendrive"
            price={344}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg"
          />
          <Product
            id={320303}
            key={103}
            title="Sandisk USB 64GB Pendrive"
            price={400}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg"
          />
          <Product
            id={32033}
            key={105}
            title="Sandisk USB 64GB Pendrive"
            price={100}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg"
          />
          <Product
            id={33203}
            key={104}
            title="Sandisk USB 64GB Pendrive"
            price={500}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={320320663}
            key={107}
            title="Sandisk USB 64GB Pendrive"
            price={544}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
