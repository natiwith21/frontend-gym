import React, { useState } from "react";
import "./Testimonials.css";
//import { testimonialsData } from "../../data/testimonialsData";
import david from "../../assets/david.jpg";
import jeff from "../../assets/jeff.jpg";
import simeon from "../../assets/simeon.jpg";
import arrow from "../../assets/arrow.png";
import right_arrow from "../../assets/right-arrow.png";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    image: jeff,
    review:
      "4K Gym is an incredible facility with a friendly staff, top-notch equipment, and a motivating atmosphere. It's the perfect place to achieve your fitness goals and be part of a supportive community.",
    name: "JEFF SAID",
    status: "CUSTOMER",
  },
  {
    image: simeon,
    review:
      "4K Gym state-of-the-art equipment and clean facilities make every workout enjoyable. The staff is friendly and always available to assist. It's a gym that truly cares about its members' fitness journey.",
    name: "SIMEON PANDA",
    status: "COACH",
  },
  {
    image: david,
    review:
      "I love the energetic atmosphere at 4k Gym! The classes are dynamic, the instructors are motivating, and the fellow members are supportive. It's a perfect place to stay motivated and make progress towards my fitness goals.",
    name: "DAVID LAID",
    status: "CUSTOMER",
  },
];

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "aqua" }}>
            {testimonialsData[selected].name}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={arrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={right_arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
