import React, { useEffect } from "react";
import "./home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/priductAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Blue Tshirt",
  img: [{ url: process.env.PUBLIC_URL + "assets/img/tshirt.jpg" }],
  price: "$3000",
  _id: "shashikant",
};

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <MetaData title="E-Commerce" />
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCT BELOW</h1>
        <a href="#productFeatured">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <div className="product" id="productFeatured">
        <div className="container">
          <h2>Featured Product</h2>
          <div className="allProduct">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
