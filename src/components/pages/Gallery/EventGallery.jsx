import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";
// import Button from "./Button";

function EventGallery() {
  const [selectedButton, setSelectedButton] = useState(null);

  // let buttonTitles = [
  //   { id: "b1", title: "Biennial Concert" },
  //   { id: "b2", title: "Biennial Sports Day" },
  //   { id: "b3", title: "Zip Zap Zoom Talent Hunt" },
  //   { id: "b4", title: "Zip Zap Zoom Summer Camp" },
  //   { id: "b5", title: "Yes, I Can!" },
  //   { id: "b6", title: "First Day of School" },
  // ];

  let imageUrl = [
    {
      id: 1,
      path: "/Gallery_Images/Events_Images/fdofs.jpeg",
      name: "First Day of School",
    },
    {
      id: 7,
      path: "/Gallery_Images/Events_Images/concert3.JPG",
      name: "Biennial Concert",
    },
    {
      id: 6,
      path: "/Gallery_Images/Events_Images/oandw.jpeg",
      name: "Orientation and Workshop",
    },
    {
      id: 4,
      path: "/Gallery_Images/Events_Images/yic2.JPG",
      name: "Yes, I Can!",
    },
    {
      id: 9,
      path: "/Gallery_Images/Events_Images/sports3.JPG",
      name: "Biennial Sports Day",
    },
    {
      id: 11,
      path: "/Gallery_Images/Events_Images/zzz1.JPG",
      name: "Zip Zap Zoom Talent Hunt",
    },
  ];

  let googlePictures = [
    {
      id: "ge1",
      path: "https://photos.app.goo.gl/YzbueL5yxoDXeJtK8",
      name: "First Day of School",
    },
    {
      id: "ge2",
      path: "https://photos.app.goo.gl/x2v34wfpwsbcJsG78",
      name: "Yes, I Can!",
    },
    {
      id: "ge3",
      path: "https://photos.app.goo.gl/vDXLQhaBH3JQPQz57",
      name: "Zip Zap Zoom Summer Camp",
    },
    {
      id: "ge4",
      path: "https://photos.app.goo.gl/W3PHL9WoPDGrSPEDA",
      name: "Biennial Concert",
    },
    {
      id: "ge5",
      path: "https://photos.app.goo.gl/AM95H35PtVQCVWdBA",
      name: "Biennial Sports Day",
    },
    {
      id: "ge6",
      path: "https://photos.app.goo.gl/8qV4KPm6QpzUyFoN8",
      name: "Zip Zap Zoom Talent Hunt",
    },
    {
      id: "ge7",
      path: "https://photos.app.goo.gl/Hibf8ckGB5qHc6BEA",
      name: "Orientation and Workshop",
    },
  ];

  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };

  return (
    <>
      <div className="background-color-gallery">
        <div className="wrapper-gallery">
          <h1 className="main-heading-gallery_title">Event Gallery</h1>
          <div className="card-container">
            {imageUrl.map(
              (image, index) =>
                (selectedButton === null || selectedButton === image.name) && (
                  <Card
                    key={index}
                    path={image.path}
                    name={image.name}
                    googlePictures={googlePictures}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventGallery;
