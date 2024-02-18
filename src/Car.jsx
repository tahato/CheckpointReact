import { product } from "./Product";
import React from 'react';

const car = () => {
    product.name="Car"
    return (
        <div>
  <h1 className="car" >{product.name}</h1>          
        </div>
    );
};

export default car;