import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import Logo from "../images/airbnb.png";
import {
  ConnectButton,
  Select,
  DatePicker,
  Input,
  Icon,
  Button,
} from "web3uikit";

const Home = () => {
  const [checkIn, setCheckin] = useState(new Date());
  const [checkOut, setCheckout] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);

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
            <div className="searchFields">
              <div className="inputs">
                Location{" "}
                <Select
                  options={[
                    {
                      id: "ny",
                      label: "New York",
                    },
                    {
                      id: "lon",
                      label: "London",
                    },
                    {
                      id: "db",
                      label: "Dubai",
                    },
                    {
                      id: "la",
                      label: "Los Angeles",
                    },
                  ]}
                  defaultOptionIndex={0}
                  onChange={(data) => setDestination(data.label)}
                />
              </div>
              <div className="vl" />
              <div className="inputs">
                Check-In
                <DatePicker
                  id="check-in"
                  onChange={(event) => setCheckin(event.date)}
                />
              </div>
              <div className="vl" />
              <div className="inputs">
                Check-Out
                <DatePicker
                  id="check-out"
                  onChange={(event) => setCheckout(event.date)}
                />
              </div>
              <div className="vl" />
              <div className="inputs">
                Guests
                <Input
                  value={2}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  type={"number"}
                />
              </div>
              <Link
                to="/rentals"
                state={{
                  destination,
                  checkIn,
                  checkOut,
                  guests,
                }}
              >
                <div className="searchButton">
                  <Icon fill="white" size={24} svg={"search"} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay , live , work or just to
          relax
        </div>
        <Button text="Explore a New Location"  onClick={()=>{
          alert("Parameter Randomization will be applied soon !")
        }}/>
      </div>

      </div>
    </>
  );
};

export default Home;
