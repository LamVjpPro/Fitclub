import React, { useState } from "react";
import "./Testtimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testtimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testtimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <span style={{ opacity: 1, transform: "none" }}>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          -- {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div style={{ opacity: 1, transform: "none" }}></div>
        <div style={{ opacity: 1, transform: "none" }}></div>
        <img
          src={testimonialsData[selected].image}
          alt=""
          style={{ opacity: 1, transform: "none" }}
        ></img>
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testtimonials;
