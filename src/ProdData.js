import React from "react";
import productInfo from "./data";
import "./ProdData.css";
import Product from "./Product";
const ProdData = () => {
  console.log("Prod Data + Product component");
  return (
    <div className="prodData">
      {productInfo?.map((item) => {
        return (
          <div className="prodData__row">
            {item?.map((i2) => {
              return (
                <Product
                  id={i2.id}
                  key={i2.key}
                  image={i2.image}
                  title={i2.title}
                  price={i2.price}
                  rating={i2.rating}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProdData;
