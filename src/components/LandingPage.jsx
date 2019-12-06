import React from "react";
import { MDBBtn } from "mdbreact";
import TypeWriter from "../components/LandingPage/TypeWriter";

import LazyHero from "react-lazy-hero";

export default function LandingPage() {
  return (
    <div
      className="text-center"
      style={{ backgroundColor: "#4285f4" }}
      id="welcome"
    >
      <LazyHero
        minHeight="100vh"
        parallaxOffset={100}
        opacity={0.1}
        style={{ position: "relative" }}
      >
        <h1 style={{ color: "#fff", fontSize: "5rem", fontWeight: "700" }}>
          Hello! I'm Vlad Grecu.
        </h1>
        <TypeWriter
          dataText={[
            "Welcome to MyOnlineCV!",
            "Nice of you to drop by!",
            "Click the button bellow to check it out!",
            "P.S. Try to catch the snowflakes!"
          ]}
        />
        <a href="#myNavigation">
          <MDBBtn color="info" style={{ zIndex: "1" }}>
            View My Website
          </MDBBtn>
        </a>
      </LazyHero>
    </div>
  );
}
