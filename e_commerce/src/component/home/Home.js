import React, { useEffect } from "react";
import "./home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/priductAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../layout/loading/Loading";
import ColorBtn from "../smallComp/ColorBtn";
import Alert from "../layout/alert/Alert";
// import { clearErrors  } from "../../actions/priductAction";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {

  
  }, [dispatch, error]);

  return (
    <>
      <Alert show={error} error={error} />
      {loading ? (
        <Loading />
      ) : (
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
              <p>Total Product: {productsCount}</p>
              <div className="allProduct">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
              <ColorBtn name="Show More" path="/products" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
