import React, { useState } from "react";
import GiftCard from "../components/GiftCard";

import amazonLogo from "../assests/images/amazon-png.png";
import FlipkartLogo from "../assests/images/flipkart-logo.png";
import { Close } from "@mui/icons-material";

import "./pagesCss/HomePage.css";
import TopNavbar from "../components/TopNavbar";

export default function HomePage() {
  const [showDetails, setShowDetails] = useState(false);
  const [detailsData, setDetailsData] = useState([]);
  const cardsArray = [
    {
      price: "200",
      brand: "amazon",
      brandImage: amazonLogo,
      offerDetails: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        "the industry's standard dummy text ever since the 1500s, when an unknown printer took a",
        " galley of type and scrambled it to make a type specimen book. It has survived not",
        "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
        "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      price: "600",
      brand: "flipkart",
      brandImage: FlipkartLogo,
      offerDetails: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        "the industry's standard dummy text ever since the 1500s, when an unknown printer took a",
        " galley of type and scrambled it to make a type specimen book. It has survived not",
        "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
        "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      price: "2000",
      brand: "amazon",
      brandImage: amazonLogo,
      offerDetails: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        "the industry's standard dummy text ever since the 1500s, when an unknown printer took a",
        " galley of type and scrambled it to make a type specimen book. It has survived not",
        "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
        "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      price: "500",
      brand: "flipkart",
      brandImage: FlipkartLogo,
      offerDetails: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        "the industry's standard dummy text ever since the 1500s, when an unknown printer took a",
        " galley of type and scrambled it to make a type specimen book. It has survived not",
        "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
        "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
  ];
  return (
    <div className="homeSection">
      <div className="navbarContainer">
        <TopNavbar />
      </div>
      <div className="cardContainer">
        {cardsArray.map((item, i) => {
          return (
            <GiftCard
              key={i}
              price={item.price}
              brand={item.brand}
              brandImage={item.brandImage}
              offerDetails={item.offerDetails}
              setShowDetails={setShowDetails}
              setDetailsData={setDetailsData}
            />
          );
        })}
        {showDetails && (
          <div className="detailsContainer">
            <div
              onClick={() => {
                setShowDetails(false);
              }}
            >
              <Close style={{ color: "#fff" }} />
            </div>
            {detailsData.map((item, i) => {
              return (
                <ul className="detailsPara">
                  <li>
                    <p key={i}>{item}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
