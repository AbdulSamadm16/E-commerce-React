import React from "react";
import ProductGrid from "./ProductGrid";
import Wishlist from "./Wishlist";
export default function Home({ setPage, addToCart, addToWishlist }) {
  return (
    <div>
      <div className="bg-light text-center py-5 mb-4">
        <h1 className="display-5 fw-bold">Welcome to LooQue</h1>
        <p className="lead mb-0">
          Explore our premium collection of skincare serums ✨
        </p>
      </div>

      {/* Pass addToCart down to ProductGrid */}
      <div>
              <ProductGrid addToCart={addToCart} addToWishlist={addToWishlist} />

      </div>

    </div>
  );
}
