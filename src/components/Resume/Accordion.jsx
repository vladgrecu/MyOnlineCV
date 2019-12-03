import React, { useState, useRef } from "react";
import Arrow from "./Arrow";

import "./Accordion.css";

const Accordion = ({ options }) => {
  const { body, title, titleIcon } = options;
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("section__icon");

  const content = useRef(null);

  const togglesection = () => {
    setActiveState(setActive === "" ? "activeTab" : "");
    setHeightState(
      setActive === "activeTab" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "activeTab" ? "section__icon" : "section__icon rotate"
    );
  };

  return (
    <div className="section-container w-75 mx-auto">
      <button className={`section ${setActive}`} onClick={togglesection}>
        <h1 className="sectionTitle">
          <i className={titleIcon}></i>
          {title}
        </h1>
        <Arrow className={`${setRotate}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="section__content"
      >
        {body.map((item, i) => (
          <div className="section__text" key={i}>
            <i className="far fa-dot-circle"></i> {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
