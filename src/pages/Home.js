import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png"
import logo from "../images/airbnbRed.png"

const Home = () => {

  return (
    <>
      <div className="container"  style={{
        backgroundImage:`url(${bg})`
      }}>

      </div>
    </>
  );
};

export default Home;
