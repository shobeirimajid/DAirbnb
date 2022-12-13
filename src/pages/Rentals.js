import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./../images/airbnbRed.png";
import { Button, ConnectButton, Icon } from "web3uikit";

const Rentals = () => {
  const { state: SearchFilters } = useLocation();
  const rentalsList = [
    {
      attributes: {
        city: "New York",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "40.716862",
        long: "-73.999005",
        name: "Apartment in China Town",
        pricePerDay: "3",
      },
    },
  ];
  let dateRange =
    SearchFilters.checkIn.toLocaleString("default", {
      month: "short",
    }) +
    SearchFilters.checkIn.toLocaleString("default", {
      day: "2-digit",
    }) +
    " - ".toString() +
    SearchFilters.checkOut.toLocaleString("default", {
      month: "short",
    }) +
    SearchFilters.checkOut.toLocaleString("default", {
      day: "2-digit",
    });

  return (
    <>
      <div className="topBanner">
        <Link to={"/"}>
          <img className="logo" src={logo} />
        </Link>
        <div className="searchReminder">
          <div className="filter">{SearchFilters.destination}</div>
          <div className="vl" />
          <div className="filter">{dateRange}</div>
          <div className="vl" />
          <div className="filter">{SearchFilters.guests} Guest</div>
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
      <hr className="line" />
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stays available to rent
          {rentalsList &&
            rentalsList.map((item) => {
              return (
                <>
                  <hr className="line2" />
                  <div className="rentalDiv">
                    <img className="rentalImg" src={item.attributes.imgUrl} />
                    <div className="rentalInfo">
                      <div className="rentalTitle">{item.attributes.name}</div>
                      <div className="rentalDesc">
                        {item.attributes.unoDescription}
                      </div>
                      <div className="rentalDesc">
                        {item.attributes.dosDescription}
                      </div>
                      <div className="bottomButton">
                        <Button text="Stay Here" />
                        <div className="price">
                          <Icon fill="#808080" size={10} svg="matic" />{" "}
                          {item.attributes.pricePerDay} / Day
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="rentalsContentR"></div>
      </div>
    </>
  );
};

export default Rentals;
