import React from "react";
import "./componentsCss/GiftCard.css";
import { Redeem, Info } from "@mui/icons-material";

export default function GiftCard({
  price,
  brand,
  brandImage,
  offerDetails,
  setShowDetails,
  setDetailsData,
}) {
  return (
    <div className="giftCardContainer">
      <div className="giftIcon">
        <Redeem
          style={{ width: "300px", fontSize: "8rem", color: "#212111" }}
        />
      </div>
      <div className="cardLabel">
        <div className="imgLogoContainer">
          <img
            src={brandImage}
            alt="amazonLogo"
            className={brand === "flipkart" ? "flipkartLogo" : "amazonLogo"}
          />
        </div>
        <h2 className="cardHeading" style={{marginTop:brand !== "flipkart"&&("-0.5rem") }}>Gift Card</h2>
      </div>
      <div className="cardBottom">
        <div className="priceBox">
          {/* <p>Price :-</p> */}
          <h3>₹ {price}/-</h3>
        </div>
        <span
          className="detailBtn"
          onClick={() => {
            setShowDetails(true);
            setDetailsData(offerDetails);
          }}
        >
          detail <Info style={{ fontSize: 18, marginLeft: "0.5rem" }} />
        </span>
      </div>
      <div className="redeemBtn">
        <span className="redeemBtnText">Redeem Now</span>
      </div>
    </div>
  );
}
