import React from "react";
import Particles from "react-particles-js";
import LazyHero from "react-lazy-hero";

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 600
      }
    },
    move: {
      random: true,
      bounce: false
    }
  }
};

export default function LandingPage() {
  return (
    <div className="text-center">
      <LazyHero
        imageSrc="https://unsplash.it/2000/1000"
        minHeight="100vh"
        parallaxOffset={100}
        color="#fff"
        opacity={0.2}
      >
        <Particles className="particles" params={particlesOptions}></Particles>
        <h1>Vlad Grecu</h1>
      </LazyHero>
    </div>
  );
}
