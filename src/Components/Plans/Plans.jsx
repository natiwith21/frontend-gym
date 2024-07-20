import React from "react";
import "./Plans.css";
import checkblack from "../../assets/checkblack.png";

import crown from "../../assets/crown.png";

import heart_attack from "../../assets/heart-attack.png";
import mel from "../../assets/mel.png";
import right_arrow from "../../assets/right-arrow.png";

const Plans = () => {
  return (
    <div className="Plans" id="plans">
      <div className="p-tiltle">
        <div className="stroke-text">READY TO START</div>
        <div>YOUR JOURNEY</div>
        <div className="stroke-text">NOW WITHUS</div>
      </div>

      <div className="cards">
        <div className="left1">
          <div>
            <img src={heart_attack} alt="" className="pic1" />
          </div>
          <div className="b-p">BASIC PLAN</div>
          <div className="dollar">$ 25</div>
          <div className="order">
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>2 hours of excercises</div>
            </div>
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>Free consultaion to coaches</div>
            </div>
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>Access to The community</div>
            </div>
            <div className="explantion">
              <div>see more benefits</div>
              <img src={right_arrow} alt="" className="pic3" />
            </div>
          </div>
          <button className="space">join now</button>
        </div>

        <div className="midile">
          <div>
            <img src={crown} alt="" className="pic1" />
          </div>
          <div className="b-p">PERMIUM PLAN</div>
          <div className="dollar">$ 30</div>
          <div className="order">
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>5 hours of excercises</div>
            </div>
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>Free consultaion to coaches</div>
            </div>
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>Access to minibar</div>
            </div>
            <div className="explantion">
              <div>see more benefits</div>
              <img src={right_arrow} alt="" className="pic3" />
            </div>
          </div>
          <button className=" space">join now</button>
        </div>

        <div className="right1">
          <div>
            <img src={mel} alt="" className="pic1" />
          </div>
          <div className="b-p">PRO PLAN</div>
          <div className="dollar">$ 45</div>
          <div className="order">
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>8 hours of excercises</div>
            </div>
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>consultaion to Private Coach</div>
            </div>
            <div className="explantion">
              <img src={checkblack} alt="" className="pic2" />
              <div>Free Fitness Merchandlses</div>
            </div>
            <div className="explantion">
              <div>see more benefits</div>
              <img src={right_arrow} alt="" className="pic3" />
            </div>
          </div>
          <button className="space">join now</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
