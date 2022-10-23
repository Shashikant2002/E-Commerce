import React, { useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/priductAction";
import Loading from "../layout/loading/Loading";
import Product from "../home/Product";
import { CgMouse } from "react-icons/cg";
import Alert from "../layout/alert/Alert";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { useState } from "react";

const categories = [
  "laptop",
  "Footwear",
  "bottom",
  "Tops",
  "attire",
  "camera",
  "smart Phone",
];

const Prpducts = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();

  const {
    loading,
    error,
    products,
    productsCount,
    filteredProduct,
    resultPerPage,
  } = useSelector((state) => state.products);

  // console.log(
  //   loading,
  //   error,
  //   products,
  //   productsCount,
  //   filteredProduct,
  //   resultPerPage
  // );

  const [currentPage, setCurrentPage] = useState(1);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(2500000);
  const [category, setcategory] = useState("");

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, rangeMin, rangeMax));
  }, [dispatch, keyword, currentPage, rangeMin, rangeMax]);

  const minSet = (e) => {
    setRangeMin(e.target.value);
  };
  const maxSet = (e) => {
    setRangeMax(e.target.value);
  };

  return (
    <>
      <Alert show={error} error={error} />
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
              {/* <div className="filterBox">
                <div className="priceFilter">
                  <h2>Price Range</h2>
                  <div className="price-input">
                    <div className="field">
                      <span>Min</span>
                      <h2>{rangeMin}</h2>
                    </div>
                    <div className="separater">-</div>
                    <div className="field">
                      <span>Max</span>
                      <h2>{rangeMax}</h2>
                    </div>
                  </div>
                  <div className="slider">
                    <div className="process"></div>
                  </div>
                  <div className="range-input">
                    <input
                      type="range"
                      onChange={minSet}
                      className="range-min"
                      name="rangeMin"
                      min="0"
                      max="2500000"
                      value={rangeMin}
                    />
                    <input
                      type="range"
                      onChange={maxSet}
                      className="range-max"
                      name="rangeMax"
                      min="0"
                      max="2500000"
                      value={rangeMax}
                    />
                  </div>
                </div>
                <div className="category">
                  {categories.map((categories) => {
                    return (
                      <li
                        key={categories}
                        className="categLink"
                        onClick={setcategory(category)}
                      >
                        {category}
                      </li>
                    );
                  })}
                </div>
              </div> */}
              <div className="product">
                <div className="allProduct" id="allProduct">
                  <p>Total Product: {productsCount}</p>
                  {products &&
                    products.map((product) => {
                      return <Product key={product._id} product={product} />;
                    })}
                </div>

                {resultPerPage < productsCount && (
                  <div className="pagenation">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Prpducts;
