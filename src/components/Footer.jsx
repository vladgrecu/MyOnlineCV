import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  // MDBNavLink,
  MDBIcon
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue lighten-2" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <p className="text-center">Powered by:</p>
            <div className="text-center">
              <MDBIcon fab icon="react" size="2x" className="m-2" />
              <MDBIcon fab icon="js" size="2x" className="m-2" />
              <MDBIcon fab icon="bootstrap" size="2x" className="m-2" />
              <MDBIcon fab icon="mdb" size="2x" className="m-2" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{"Vlad Grecu "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
