import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const searchSubmitHandeler = (e) => {
    e.preventDefault();
    if (keyword.trim()) { 
      navigate(`/products/${keyword}`); 
    } else {
      navigate("/products"); 
    } 
  };

  return (
    <>
      <div className="searchBox">
        <div className="container">
          <form onSubmit={searchSubmitHandeler}>
            <input
              type="text"
              placeholder="Search a Product...."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
