import React from "react";
import "./leftside.css";
const LeftSide = () => {
  return (
    <>
      <div className="left-side-container">
      <h2 className="leftSide-hearder">
        Your go-to destination for second-hand b
        <span className="circle-style">oo</span>ks
      </h2>

      <p className="home-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <div className="left-side-button">
      <button className="explore-button">Explore</button>
      <button className="getStarted-button">Get Started</button>
      </div>
      </div>
    </>
  );
};

export default LeftSide;
