import React from "react";

const Products = () => {
  return (
    <div className="products">
      <div className="products-content" id="products">
        <h2>Our Products</h2>
        <div class="container">
          <div class="product_container">
            <div class="grid_item">
              <div class="card2">
                <img src="assets/cup2.png" alt="cup" />
                <div class="card_content">
                  <h3>Plant Based Reusable Cup</h3>
                </div>
              </div>
            </div>
            <div class="grid_item">
              <div class="card2">
                <img src="assets/earbud2.png" alt="Project 1" />
                <div class="card_content">
                  <h3>Bamboo Earbud</h3>
                </div>
              </div>
            </div>
            <div class="grid_item">
              <div class="card2">
                <img src="assets/brush2.png" alt="Project 1" />
                <div class="card_content">
                  <h3>Bamboo Brush</h3>
                </div>
              </div>
            </div>
            <div class="grid_item">
              <div class="card2">
                <img src="assets/straw.png" alt="Project 4" />
                <div class="card_content">
                  <h3>Reusable Straw</h3>
                </div>
              </div>
            </div>
            <div class="grid_item">
              <div class="card2">
                <img src="assets/loofah.png" alt="Project 5" />
                <div class="card_content">
                  <h3>Loofah</h3>
                </div>
              </div>
            </div>
            <div class="grid_item">
              <div class="card2">
                <img src="assets/bag.png" alt="Project 5" />
                <div class="card_content">
                  <h3>Plant Based Reusable Bag</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
