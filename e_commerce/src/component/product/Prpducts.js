import React, { useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/priductAction";
import Loading from "../layout/loading/Loading";
import Product from "../home/Product";
import { CgMouse } from "react-icons/cg";

const Prpducts = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  console.log(error, productsCount);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="products">
            <div className="banner">
              <p>Our Products</p>
              <h1>CHOOSE YOUR PRODUCTS</h1>
              <a href="#allProduct">
                <button>
                  Scroll <CgMouse />
                </button>
              </a>
            </div>
            <div className="container">
              <div className="allProduct" id="allProduct">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Prpducts;
