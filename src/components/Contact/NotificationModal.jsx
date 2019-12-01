import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

export default function NotificationModal({
  isVisible,
  setVisibility,
  serverResponse
}) {
  return (
    <MDBContainer>
      <MDBBtn onClick={() => setVisibility(false)}>Modal</MDBBtn>
      <MDBModal
        isOpen={isVisible}
        onClick={() => setVisibility(false)}
        centered
      >
        <MDBModalHeader toggle={() => setVisibility(false)}>
          Submit Status
        </MDBModalHeader>
        <MDBModalBody>{serverResponse}</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="info" onClick={() => setVisibility(false)}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}
