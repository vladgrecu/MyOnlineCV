import React from "react";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import "../components/Home/Home.css";
import Card from "./Home/Card";
import Gallery from "./Home/Gallery";

export default function Home() {
  return (
    <div className="card w-75 mx-auto mt-5">
      <h1 className="text-center mt-5 border-bottom w-25 mx-auto p-2">
        About me
      </h1>
      <div className="home-items-container">
        <div className="blocks">
          <Bounce duration={1500} left>
            <div
              className="hoverable home-text"
              style={{ backgroundColor: "#f35220" }}
            >
              <h1 className="text-center">My Journey</h1>
              <p>
                For the past year I made the decision to get back on the road
                that I walked away from, many years ago and change my career
                path, leveraging most of my spare time, on learning and
                developing the skills necessary to become a Software Developer.
              </p>
              <p className="text-center">
                <i className="fas fa-graduation-cap fa-4x"></i>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, consequatur quam veniam placeat iusto voluptatum
                aliquam magnam? Culpa natus ipsum libero odio optio magnam
                quasi, temporibus similique eos, beatae totam.
              </p>
              <p className="text-center">
                <i className="fas fa-rocket fa-4x"></i>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, consequatur quam veniam placeat iusto voluptatum
                aliquam magnam? Culpa natus ipsum libero odio optio magnam
                quasi, temporibus similique eos, beatae totam.
              </p>
              <p className="text-center">
                <i className="fas fa-dumbbell fa-4x"></i>
              </p>
            </div>
          </Bounce>
          <Bounce duration={1500} right>
            <div
              className="hoverable home-text"
              style={{ backgroundColor: "#ffbb02" }}
            >
              <h1 className="text-center">Competitive Gamer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, consequatur quam veniam placeat iusto voluptatum
                aliquam magnam? Culpa natus ipsum libero odio optio magnam
                quasi, temporibus similique eos, beatae totam.
              </p>
              <p className="text-center">
                <i className="fas fa-gamepad fa-4x"></i>
              </p>
            </div>
          </Bounce>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
