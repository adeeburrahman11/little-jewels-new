import * as React from "react";
import "./Card.css";
import Card from "./Card";

function MediaCoverageGallery() {
  const imageUrl = [
    {
      id: "m1",
      path: "/Gallery_Images/Media_Coverage_Images/mci1.jpeg",
      name: "Winners of Intra-Class Hindi Poem Recitation Competition",
    },
    {
      id: "m2",
      path: "/Gallery_Images/Media_Coverage_Images/mci2.jpeg",
      name: "Winners of Inter School Skating Competition",
    },
    {
      id: "m3",
      path: "/Gallery_Images/Media_Coverage_Images/mci3.jpeg",
      name: "Winners of the Skating Competition",
    },
    {
      id: "m4",
      path: "/Gallery_Images/Media_Coverage_Images/mci4.jpeg",
      name: "Winners of the Poem's Recitation Competition",
    },
    {
      id: "m5",
      path: "/Gallery_Images/Media_Coverage_Images/mci5.jpeg",
      name: "Annual Flagship Event",
    },
    {
      id: "m6",
      path: "/Gallery_Images/Media_Coverage_Images/mci6.jpeg",
      name: "Annual Flagship Event",
    },
    {
      id: "m7",
      path: "/Gallery_Images/Media_Coverage_Images/mci7.jpeg",
      name: "Winners of the Poem's Recitation Competition",
    },
    {
      id: "m8",
      path: "/Gallery_Images/Media_Coverage_Images/mci8.jpeg",
      name: "Grandparent's Day Celebrations",
    },
    {
      id: "m9",
      path: "/Gallery_Images/Media_Coverage_Images/mci9.jpeg",
      name: "Fancy Dress Competition",
    },
    {
      id: "m10",
      path: "/Gallery_Images/Media_Coverage_Images/mci10.jpeg",
      name: "Little Jewels Admissions",
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
