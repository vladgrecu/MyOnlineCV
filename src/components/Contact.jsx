import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput
} from "mdbreact";

const Contact = () => {
  return (
    <section className="my-5 card w-75 mx-auto">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Get in Touch
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Whether you want to get in touch, talk about a project collaboration, or
        just say hi, I'd love to hear from you. Simply fill the from and send me
        an email.
      </p>
      <MDBCol className="mx-auto w-responsive">
        <MDBCol lg="12" className="lg-0 mb-4 mx-auto">
          <MDBCard>
            <MDBCardBody className="mx-auto w-responsive">
              <div className="form-header">
                <h3 className="mt-2 text-center">
                  <MDBIcon icon="envelope" /> Send A Message
                </h3>
              </div>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message..."
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="12">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12999.465526304164!2d23.59933599754767!3d46.768819032303576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1574711504425!5m2!1sro!2sro"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Cluj-Napoca, Romania</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 40 742 874 381</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mb-md-0">vladgrecu.smp@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBCol>
    </section>
  );
};

export default Contact;
