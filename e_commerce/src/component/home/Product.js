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

const Product = ({ product }) => {
  return (
    <>
      <Link className="productCard" to={product._id}>
        <img src={process.env.PUBLIC_URL + "assets/img/tshirt.jpg"} alt={product.name} />
        <h3>{product.name}</h3>
        <div className="review">
          <ReactStart {...options} value = {product.rating} />
          <span>({product.reviews.length} Reviews)</span>
        </div>
        <h4>${product.price}</h4>
      </Link>
    </>
  );
};

export default Product;
