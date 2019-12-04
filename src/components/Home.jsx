import React from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import "../components/Home/Home.css";
import Card from "./Home/Card";
import Gallery from "./Home/Gallery";

export default function Home() {
  return (
    <div className="card w-75 mx-auto mt-4 p-4">
      <h1 className="text-center mb-5 mx-auto border-bottom w-50 p-3">
        About me
      </h1>
      <div className="home-items-container">
        <div className="blocks ">
          <Bounce duration={1500} left>
            <div
              className="hoverable home-text"
              style={{ backgroundColor: "#f35220" }}
            >
              <h1 className="text-center">My Journey</h1>
              <p>
                For the past year I made the decision to change my career path,
                leveraging most of my spare time, on learning the skills
                necessary to become a Software Developer. One of the happiest
                moments on a normal workday is when I finally get that piece of
                code to work the way I want it to.
              </p>
              <p className="text-center ">
                <i className="fas fa-graduation-cap fa-4x tada"></i>
              </p>
            </div>
          </Bounce>
          <Bounce duration={2500} left>
            <div
              className="hoverable home-text"
              style={{ backgroundColor: "#00a7f0" }}
            >
              <h1 className="text-center">Tech Enthusiast</h1>
              <p>
                For as long as I can remember I was curious of how gadgets were
                built and how they worked. Whether it was a cool toy that I
                would break apart in the process(and could never put back
                together), some home appliance that was broken or later on, a
                phone, a PC or a TV.
              </p>
              <p className="text-center ">
                <i className="fas fa-rocket fa-4x tada"></i>
              </p>
            </div>
          </Bounce>
        </div>
        <Zoom bottom duration={3000}>
          <Card />
        </Zoom>
        <div className="blocks">
          <Bounce duration={2500} right>
            <div
              className="hoverable home-text"
              style={{ backgroundColor: "#82bd01" }}
            >
              <h1 className="text-center">Crossfit Maniac</h1>
              <p>
                Crossfit has been part of my life for the past 5 years. It has
                tought me many lessons through the workouts done and most
                importantly through the community that pushed me to always get
                out of my confort zone and achieve more. I will keep training
                for as long as my limbs hold together!
              </p>
              <p className="text-center ">
                <i className="fas fa-dumbbell fa-4x tada"></i>
              </p>
            </div>
          </Bounce>
          <Bounce duration={1500} right>
            <div
              className="hoverable home-text"
              style={{ backgroundColor: "#ffbb01" }}
            >
              <h1 className="text-center">Competitive Gamer</h1>
              <p>
                It might sound crazy, but for a long part of my life I used to
                play video games, but I was not your average gamer, I wanted to
                be the best(or among the best) at the games that I was
                passionate about, in particular WoW where I took part in the
                race to World 1st with my team.
              </p>
              <p className="text-center ">
                <i className="fas fa-gamepad fa-4x tada"></i>
              </p>
            </div>
          </Bounce>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
