import React from "react";
import { BiRecycle } from "react-icons/bi";
import { MdMicrowave } from "react-icons/md";
import { FaFeatherAlt } from "react-icons/fa";
const Product = () => {
  return (
    <div className="product">
      <div className="Description">
        <h1>Buy this kit</h1>
        <h1>to sustain anywhere</h1>
        <div className="pricetag">
          <h3>€10.99</h3>
          <div class="vl"></div>
          <p className="paragraph">
            This kit is a collection of tools and resources aimed at promoting
            environmentally friendly habits and reducing waste, often including
            reusable items such as tooth brush, shopping bags, and food
            containers.
          </p>
        </div>
        <div className="button">
          <button className="buynow">Buy Now</button>
          <button className="details">Details</button>
        </div>
      </div>
      <div className="img-wrapper">
        <img className="main-img" src="/assets/kit.png" alt="kit" />
      </div>
      <div className="card">
        <div className="Recycle">
          <BiRecycle className="birecycle" />
          <p>100% Recyclable</p>
        </div>
        <div className="Recycle">
          <FaFeatherAlt className="birecycle" />
          <p>LightWeight</p>
        </div>
        <div className="Recycle">
          <MdMicrowave className="birecycle" />
          <p>Microwavable</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
