import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import Logo from "../images/airbnb.png";
import { ConnectButton } from "web3uikit";

const Home = () => {
  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="container">
          <div className="containerGradient">
            <div className="topBanner">
              <div>
                {" "}
                <img className="logo" src={Logo} />
              </div>
              <div className="tabs">
                <div className="selected">Places to stay</div>
                <div>Experiences</div>
                <div>Online Experiences</div>
              </div>

              <div className="lrContainers">
                <ConnectButton />
              </div>
            </div>
          </div>
          <div className="tabContent">
            <div className="searchFields"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
