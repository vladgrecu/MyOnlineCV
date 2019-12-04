import React from "react";

const goToHomeSection = () => {
  const welcomSection = document.getElementById("welcome");
  welcomSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

export default function BackToTop({ toggleParticles }) {
  return (
    <div
      onClick={() => {
        goToHomeSection();
        toggleParticles();
      }}
      className="d-none fixed-action-btn"
      id="backToTop"
      style={{
        position: "fixed",
        bottom: "80px",
        right: "24px",
        zIndex: "100",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      <div className="btn-lg blue rounded-circle hoverable">
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
}
