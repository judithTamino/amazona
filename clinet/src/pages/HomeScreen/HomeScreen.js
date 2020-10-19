import React from "react";
import { Link } from "react-router-dom";
import data from "../../API/index";

export default function HomeScreen() {
  return (
    <div>
      <ul className="products">
        {data.products.map((product, index) => {
          return (
            <li className="product" key={index}>
              <Link to={`/product/${product._id}`}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </Link>
              <div className="product-name">
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </div>
              <div className="product-brand"> {product.brand} </div>
              <div className="price">${product.price}</div>
              <div className="product-rating">
                {" "}
                {product.rating} stars {product.numReviews}{" "}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
