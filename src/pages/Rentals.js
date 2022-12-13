import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Rentals = () => {
  const {state:SearchFilters}=useLocation()
  return (
    <>
     <Link to="/"> Home </Link>
     {
      SearchFilters ? <div className="searchFilters">
        hi
          {
            console.log(SearchFilters)

          }
      </div>:<></>
     }
    </>
  );
};

export default Rentals;
