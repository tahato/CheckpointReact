import { product } from "./Product";
import React from 'react';
import pict from "./download.jpg"

const Pictur = () => {
product.image=<img src={pict} alt="" />
    return (
        <div>
       { product.image}
        </div>
    );
};

export default Pictur;