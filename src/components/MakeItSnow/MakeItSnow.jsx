import React from "react";

let snowFlakeButton = "";

export default function MakeItSnow({ toggleParticles, isSnowing }) {
  !isSnowing
    ? (snowFlakeButton = "btn-lg red rounded-circle hoverable")
    : (snowFlakeButton = "btn-lg light-green rounded-circle hoverable");
  return (
    <div
      onClick={toggleParticles}
      className="fixed-action-btn "
      style={{
        position: "fixed",
        bottom: "80px",
        left: "24px",
        zIndex: "100",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      <div className={snowFlakeButton}>
        <i className="far fa-snowflake position-relative">
          {!isSnowing ? (
            <i
              className="fas fa-slash fa-lg position-absolute"
              style={{
                top: "0.5px",
                left: "-7.5px"
              }}
            ></i>
          ) : null}
        </i>
      </div>
    </div>
  );
}
