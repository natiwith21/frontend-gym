import React from "react";
import "./Hero.css";
import heart from "../../assets/heart.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="left">
        <div className="the-best-add">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text ">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>IDEAL BODY</div>
        </div>
        <span>
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </span>
      </div>
      <div className="right-h">
        <motion.div
          initial={{ left: "74rem" }}
          whileInView={{ left: " 70rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" className="heart" />
          <span>Heart Rate</span>
          <span>128 bpm</span>
        </motion.div>
      </div>
      {/*figures */}
      <div className="figures">
        <div className="figures-1">
          <div>
            <span>
              <NumberCounter end={145} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={125} start={100} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            {" "}
            <span>
              <NumberCounter end={50} start={30} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-btn">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
