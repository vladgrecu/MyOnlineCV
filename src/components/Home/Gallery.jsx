import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

import picture1 from "../../assets/photos/about/spartan1.jpg";
import picture2 from "../../assets/photos/about/spartan2.jpg";
import picture3 from "../../assets/photos/about/spartan3.jpg";
import picture4 from "../../assets/photos/about/filmari1.jpg";

const carrouselItem = [
  { id: "1", src: picture1, text: "pic1 description" },
  { id: "2", src: picture2, text: "pic2 description" },
  { id: "3", src: picture3, text: "pic3 description" },
  { id: "4", src: picture4, text: "pic4 description" }
];
const Gallery = () => {
  return (
    <MDBContainer className="card mb-5">
      <h1 id="gallery" className="text-center mt-4 mb-4">
        Picture Gallery
      </h1>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 w-50 mx-auto mb-4"
      >
        <MDBCarouselInner>
          {carrouselItem.map((item, index) => (
            <MDBCarouselItem itemId={item.id} key={index}>
              <MDBView>
                <img
                  className="d-block w-100 mx-auto"
                  src={item.src}
                  alt="First slide"
                />
              </MDBView>
              <MDBCarouselCaption>
                <p>{item.text}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Gallery;
