import React from "react";
import "./Programs.css";
import fire from "../../assets/fire.png";
import mel from "../../assets/mel.png";
import heart_attack from "../../assets/heart-attack.png";
import running_man from "../../assets/running-man.png";
import right from "../../assets/right.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/*header */}
      <div className="programs-header">
        <span className="gray">Explore our</span>
        <span>Programs</span>
        <span className="gray ">to shape you</span>
      </div>
      {/* icons */}
      <div className="program-categories">
        <div className="align">
          <img src={mel} alt="" className="pic" />
          <div className="bold">Strength Training</div>
          <div className="small">
            > In this program, you are trained to improve your strength through
            many exercises.
          </div>
          <div className="join">
            Join Now
            <span>
              <img src={right} alt="" className="pic" />
            </span>
          </div>
        </div>
        <div className="align">
          <img src={running_man} alt="" className="pic" />
          <div className="bold">Cardio Training</div>
          <div className="small">
            > In this program, you are trained to do sequential moves in range
            of 20 until 30 minutes.
          </div>
          <div className="join">
            Join Now
            <span>
              <img src={right} alt="" className="pic" />
            </span>
          </div>
        </div>
        <div className="align">
          <img src={fire} alt="" className="pic" />
          <div className="bold">Fat Burning</div>
          <div className="small">
            > This program is suitable for you who wants to get rid of your fat
            and lose their weight
          </div>
          <div className="join">
            Join Now
            <span>
              <img src={right} alt="" className="pic" />
            </span>
          </div>
        </div>
        <div className="align">
          <img src={heart_attack} alt="" className="pic" />
          <div className="bold">Health Fitness</div>
          <div className="small">
            > This programs is designed for those who exercises only for their
            body fitness not body building.
          </div>
          <div className="join">
            Join Now
            <span>
              <img src={right} alt="" className="pic" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
