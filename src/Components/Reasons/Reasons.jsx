import React from "react";
import "./Reasons.css";

import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.webp";
import pic3 from "../../assets/pic3.jpg";
import check from "../../assets/check.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <p></p>
      <div className="left-r">
        <img src={pic1} alt="" />
        <img src={pic3} alt="" />
        <img src={pic2} alt="" />
      </div>
      <div className="right-r">
        <div className="title">SOME REASONS</div>
        <div className="title2 ">
          {" "}
          <span className="stroke-text">WHY</span> CHOOSE US?
        </div>
        <div className="img">
          <img src={check} alt="" className="pic1" /> OVER 140+ EXPERT COACHS
        </div>
        <div className="img">
          <img src={check} alt="" className="pic1" /> TRAIN SMARTER AND FASTER
          THAN BEFORE
        </div>
        <div className="img">
          <img src={check} alt="" className="pic1" /> 1 FREE PROGRAM FOR NEW
          MEMBER
        </div>
        <div className="img">
          <img src={check} alt="" className="pic1" /> RELIABLE PARTNERS
        </div>
        <div className="our">OUR PARTNERS</div>
        <div className="partners">
          <img src={adidas} alt="" className="pic1" />
          <img src={nike} alt="" className="pic1" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
