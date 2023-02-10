import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="shop">
          <h4 className="shoph4">Shop Product</h4>
          <p className="shopp">Discover the best natural product</p>
        </div>
        <div class="v2"></div>
        <div className="cup">
          <img className="footer-img" src="./assets/cup.png" alt="cup" />
          <div className="pstyle">
            <p className="cupp">Cup</p>
            <p className="shopnowp">Shop Now +</p>
          </div>
        </div>
        <div className="cup">
          <img className="footer-img" src="./assets/brush.png" alt="brush" />
          <div className="pstyle">
            <p className="cupp">Brush</p>
            <p className="shopnowp">Shop Now +</p>
          </div>
        </div>
        <div className="cup">
          <img
            className="footer-img"
            src="./assets/bamboostick.png"
            alt="bamboostick"
          />
          <div className="pstyle">
            <p className="cupp">Earbud</p>
            <p className="shopnowp">Shop Now +</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
