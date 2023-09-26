import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Crystal Shopping</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>

      <div className="banner">
    <h2>Special Offers</h2>
    <p>Get amazing deals on our products!</p>
    
  </div>
    </div>
  );
};