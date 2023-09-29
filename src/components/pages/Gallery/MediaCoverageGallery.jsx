import * as React from "react";
import "./Card.css";
import Card from "./Card";

function MediaCoverageGallery() {
  const imageUrl = [
    {
      id: "m1",
      path: "/images/media-coverage/media1.jpg",
      name: "Winners of Intra-Class Hindi Poem Recitation Competition",
    },
    {
      id: "m2",
      path: "/images/media-coverage/media2.jpg",
      name: "Winners of Inter School Colouring Competition",
    },
    {
      id: "m3",
      path: "/images/media-coverage/media3.jpg",
      name: "Winners of the Poem's Recitation Competition",
    },
  ];

  let googlePictures = [
    {
      id: "gm1",
      path: "https://photos.app.goo.gl/vNTh6QTA41SPYE7F7",
      name: "Winners of Intra-Class Hindi Poem Recitation Competition",
    },
    {
      id: "gm2",
      path: "https://photos.app.goo.gl/vNTh6QTA41SPYE7F7",
      name: "Winners of Inter School Colouring Competition",
    },
    {
      id: "gm3",
      path: "https://photos.app.goo.gl/vNTh6QTA41SPYE7F7",
      name: "Winners of the Poem's Recitation Competition",
    },
  ];

  return (
    <>
    <div className="background-color-gallery">
      <div className="wrapper-gallery">
        <h1 className="main-heading-gallery_title">Media Coverage Gallery</h1>
        <div className="card-container">
          {imageUrl.map((image, index) => (
            <Card
              key={index}
              path={image.path}
              name={image.name}
              googlePictures={googlePictures}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default MediaCoverageGallery;
