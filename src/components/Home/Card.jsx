import React from "react";
import Me from "../../assets/photos/home/me.jpg";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBCol className="home-card">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={Me} waves hover />
        <MDBCardBody>
          <MDBCardTitle>"Fear has two meanings"</MDBCardTitle>
          <MDBCardText>
            <span>"Forget Everything and Run</span>
            <span> or </span>
            <span>Face Everything and Rise"</span>
          </MDBCardText>
          <a href="#gallery">
            <MDBBtn color="info">View Gallery</MDBBtn>
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CardExample;
