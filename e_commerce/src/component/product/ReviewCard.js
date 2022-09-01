import React from "react";
import ReactStart from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,20,.1)",
  activeColor: "tomato",
  isHalf: true,
  size: window.innerWidth < 600 ? 20 : 25,
};

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="reviewMain">
        <img src={process.env.PUBLIC_URL + "/assets/img/user.png"} alt="User" />
        <h4>{review.name}</h4>
        <div className="reviewStar">
          <ReactStart {...options} value={review.rating} />
        </div>
        <p>{review.comment}</p>
      </div>
    </>
  );
};

export default ReviewCard;
