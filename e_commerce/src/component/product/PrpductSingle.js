import React, { useEffect } from "react";
import "./productDetail.css";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/priductAction";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const PrpductSingle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {products, loading, error} = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="productDetails">
        <div className="container">
          <div className="image">
            <Carousel responsive={responsive}>
              {products.image &&
                products.image.map((item, i) => (
                  <img key={i} src={process.env.PUBLIC_URL + item.url} alt={`${i} Slides`} />
                ))}
            </Carousel>
          </div>
          <div className="content">fdsjk</div>
        </div>
      </div>
    </>
  );
};

export default PrpductSingle;
