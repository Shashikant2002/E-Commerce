import React, { useEffect, useState } from "react";
import "./productDetail.css";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/priductAction";
import Loading from "../layout/loading/Loading";
import ReactStart from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const options = {
  edit: false,
  color: "rgba(20,20,20,.1)",
  activeColor: "tomato",
  isHalf: true,
  size: window.innerWidth < 600 ? 20 : 25,
};

const PrpductSingle = () => {
  const [quen, setQuen] = useState(1);
  const decQuen = () => {
    if (quen === 1) {
      setQuen(1);
    } else {
      setQuen(quen - 1);
    }
  };
  const incQuen = () => {
    setQuen(quen + 1);
  };
  const onchangeHandle = (e) => {
    setQuen(Number(e.target.value));
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  
  console.log(error);
  return (
    <>
      {/* <Alert show={alert} error={error} /> */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="productDetails">
            <div className="container">
              <div className="image">
                <Carousel
                  responsive={responsive}
                  showDots={true}
                  infinite={true}
                >
                  {product.image &&
                    product.image.map((item, i) => (
                      <img
                        className="img"
                        key={i}
                        src={process.env.PUBLIC_URL + "/assets/img/tshirt.jpg"}
                        alt={`${i + 1} Slides`}
                      />
                    ))}
                </Carousel>
              </div>
              <div className="content">
                <h1>{product.name}</h1>
                <p>Product: #{product._id}</p>
                <div className="review">
                  <ReactStart {...options} value={product.ratings} />
                  <span>({product.numberOfReviews} Reviews)</span>
                </div>
                <h1>${product.price}</h1>
                <div className="quen">
                  <button onClick={decQuen}>-</button>
                  <input
                    onChange={onchangeHandle}
                    value={quen}
                    type="number"
                    name="quentity"
                  />
                  <button onClick={incQuen}>+</button>
                </div>
                <button className="button">Add To Card</button>
                <p>
                  Status:
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "Out Of Stock" : "In Stock"}
                  </b>
                </p>
                <p>Description: {product.description}</p>
                <button>Submit Review</button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="reviews">
        <h1>Product Reviews</h1>
        <div className="reviewContent">
          {product.reviews && product.reviews[0] ? (
            product.reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))
          ) : (
            <p>No Reviews Added</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PrpductSingle;
