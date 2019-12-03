import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput
} from "mdbreact";
import NotificationModal from "../components/Contact/NotificationModal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  const [visibility, setVisibility] = useState(false);
  let form = { name, email, subject, message };

  const submitForm = async event => {
    event.preventDefault();
    try {
      const request = await fetch("https://formspree.io/mnqndzok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      await request.json();
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setServerResponse(
        "Your email is on it's way! I will get in touch as soon as possible."
      );
      setVisibility(true);
    } catch (error) {
      setServerResponse("Something went wrong! Please try again.");
      setVisibility(true);
    }
  };
  return (
    <section className="my-5 card w-75 mx-auto">
      <h1 className="text-center mt-5 mb-5 mx-auto border-bottom w-50 p-3">
        Get in Touch
      </h1>
      <p className="text-center w-responsive mx-auto p-2 pb-5">
        Whether you want to get in touch, talk about a project collaboration, or
        just say hi, I'd love to hear from you. Simply fill the form and send me
        an email.
      </p>
      <MDBCol className="mx-auto w-responsive">
        <MDBCol lg="12" className="lg-0 mb-4 mx-auto">
          <MDBCard>
            <MDBCardBody className="mx-auto w-responsive">
              <form onSubmit={submitForm}>
                <div className="form-header">
                  <h3 className="mt-2 text-center">
                    <MDBIcon icon="envelope" /> Send A Message
                  </h3>
                </div>
                <div className="md-form">
                  <MDBInput
                    required
                    icon="user"
                    label="Your name"
                    iconClass="grey-text"
                    type="text"
                    id="form-name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    required
                    icon="envelope"
                    label="Your email"
                    iconClass="grey-text"
                    type="email"
                    id="form-email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    required
                    icon="tag"
                    label="Subject"
                    iconClass="grey-text"
                    type="text"
                    id="form-subject"
                    value={subject}
                    onChange={event => setSubject(event.target.value)}
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    required
                    icon="pencil-alt"
                    label="Message..."
                    iconClass="grey-text"
                    type="textarea"
                    id="form-text"
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="light-blue" type="submit">
                    Submit
                  </MDBBtn>
                </div>
              </form>
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
      {visibility ? (
        <NotificationModal
          isVisible={visibility}
          setVisibility={setVisibility}
          serverResponse={serverResponse}
        />
      ) : null}
    </section>
  );
};

export default Contact;
