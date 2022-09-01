import React, { useEffect } from "react";
import "./home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/priductAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../layout/loading/Loading";
import ColorBtn from "../smallComp/ColorBtn";
// import Alert from "../layout/alert/Alert";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  console.log(error, productsCount);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // console.log(error)
  // console.log(productsCount)
  // useEffect(() => {
  //   if (error) {
  //     const alert = () => {
  //       return true;
  //     };
  //   }
  // }, [dispatch, error]);

  return (
    <>
      {/* <Alert show={alert} error={error} /> */}
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
              <div className="allProduct">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
              <ColorBtn name="Show More" path="/product" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
