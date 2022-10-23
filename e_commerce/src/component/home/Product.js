import React from "react";
import { Link } from "react-router-dom";
import ReactStart from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,20,.1)",
  activeColor: "tomato",
  isHalf: true,
  size: window.innerWidth < 600 ? 20 : 25,
};

const Products= ({ product }) => {
  return (
    <>
      <Link className="productCard" to={`/product/${product._id}`}>
        <img src={`${process.env.PUBLIC_URL}/${product.image[0].url}`} alt={product.name} />
        <h3>{product.name}</h3>
        <div className="review">
          <ReactStart {...options} value = {product.ratings} />
          <span>({product.numberOfReviews} Reviews)</span>
        </div>
        <h4>${product.price}</h4>
      </Link>
    </>
  );
};

export default Products;
