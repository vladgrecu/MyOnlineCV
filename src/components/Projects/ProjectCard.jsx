import React from "react";
import { MDBBtn } from "mdbreact";
import Zoom from "react-reveal/Zoom";

export default function ProjectCard({ options, index }) {
  const { title, img, description, gitHub, live } = options;

  const openNewWindow = url => {
    window.open(url);
  };

  return (
    <Zoom duration={500 * (index + 1)}>
      <div className="card w-50 m-5 mx-auto">
        <div
          className="view overlay hoverable enlarge"
          onClick={() => openNewWindow(live)}
        >
          <img
            className="card-img-top img-thumbnail "
            src={img}
            alt="project-foto"
          />
          <div className="mask rgba-white-slight"></div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <MDBBtn color="dark" onClick={() => openNewWindow(gitHub)}>
            <i className="fab fa-github fa-2x"></i>
          </MDBBtn>
          <MDBBtn color="success" onClick={() => openNewWindow(live)}>
            <i className="far fa-play-circle fa-2x"></i>
          </MDBBtn>
        </div>
      </div>
    </Zoom>
  );
}
