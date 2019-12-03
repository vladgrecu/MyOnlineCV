import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import { carrouselItem } from "../../assets/helpers/carousel";

const Gallery = () => {
  return (
    <MDBContainer className="card mb-5">
      <h1 id="gallery" className="text-center mt-4 mb-4">
        Picture Gallery
      </h1>
      <MDBCarousel
        activeItem={1}
        length={7}
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
