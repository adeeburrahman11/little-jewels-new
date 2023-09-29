import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";
import Button from "./Button";

function EventGallery() {
  const [selectedButton, setSelectedButton] = useState(null);

  let buttonTitles = [
    { id: "b1", title: "Biennial Concert" },
    { id: "b2", title: "Biennial Sports Day" },
    { id: "b3", title: "Zip Zap Zoom Talent Hunt" },
    { id: "b6", title: "Zip Zap Zoom Skating Competition" },
    { id: "b5", title: "Zip Zap Zoom Summer Camp" },
    { id: "b4", title: "Yes, I Can!" },
    { id: "b7", title: "Colour Day Celebrations" },
    { id: "b8", title: "First Day of School" },
  ];

  let imageUrl = [
    {
      id: 1,
      path: "/images/events/cdc1.jpeg",
      name: "Colour Day Celebrations",
    },
    {
      id: 2,
      path: "/images/events/cdc2.jpeg",
      name: "Colour Day Celebrations",
    },
    {
      id: 3,
      path: "/images/events/fds1.jpeg",
      name: "First Day of School",
    },
    {
      id: 4,
      path: "/images/events/fds2.jpeg",
      name: "First Day of School",
    },
    {
      id: 5,
      path: "/images/events/yic1.jpg",
      name: "Yes, I Can!",
    },
    {
      id: 6,
      path: "/images/events/yic2.jpg",
      name: "Yes, I Can!",
    },
    {
      id: 7,
      path: "/images/events/zzzsc1.jpg",
      name: "Zip Zap Zoom Summer Camp",
    },
    {
      id: 8,
      path: "/images/events/zzzsc2.jpg",
      name: "Zip Zap Zoom Summer Camp",
    },
    {
      id: 9,
      path: "/images/events/concert1.JPG",
      name: "Biennial Concert",
    },
    {
      id: 10,
      path: "/images/events/concert2.JPG",
      name: "Biennial Concert",
    },
    {
      id: 11,
      path: "/images/events/sports1.JPG",
      name: "Biennial Sports Day",
    },
    {
      id: 12,
      path: "/images/events/sports2.JPG",
      name: "Biennial Sports Day",
    },
    {
      id: 13,
      path: "/images/events/talent1.JPG",
      name: "Zip Zap Zoom Talent Hunt",
    },
    {
      id: 14,
      path: "/images/events/talent2.JPG",
      name: "Zip Zap Zoom Talent Hunt",
    },
    {
      id: 15,
      path: "/images/events/skating1.JPG",
      name: "Zip Zap Zoom Skating Competition",
    },
    {
      id: 16,
      path: "/images/events/skating2.JPG",
      name: "Zip Zap Zoom Skating Competition",
    },
    {
      id: 17,
      path: "/images/events/NUR R.jpeg",
      name: "Colour Day Celebrations",
    },
    {
      id: 18,
      path: "/images/events/fd (17).jpeg",
      name: "First Day of School",
    },
    {
      id: 19,
      path: "/images/events/yic5.jpg",
      name: "Yes, I Can!",
    },
    {
      id: 20,
      path: "/images/events/zzzsc5.jpg",
      name: "Zip Zap Zoom Summer Camp",
    },
    {
      id: 21,
      path: "/images/events/concert5.JPG",
      name: "Biennial Concert",
    },
    {
      id: 11,
      path: "/images/events/sports3.JPG",
      name: "Biennial Sports Day",
    },
    {
      id: 13,
      path: "/images/events/talent7.JPG",
      name: "Zip Zap Zoom Talent Hunt",
    },
    {
      id: 15,
      path: "/images/events/skating4.JPG",
      name: "Zip Zap Zoom Skating Competition",
    },
  ];

  let googlePictures = [
    {
      id: "ge1",
      path: "https://photos.app.goo.gl/Sp9eCbCW9jjZoowa9",
      name: "Colour Day Celebrations",
    },
    {
      id: "ge2",
      path: "https://photos.app.goo.gl/YzbueL5yxoDXeJtK8",
      name: "First Day of School",
    },
    {
      id: "ge3",
      path: "https://photos.app.goo.gl/kMGJUHFZHScsV3eb8",
      name: "Yes, I Can!",
    },
    {
      id: "ge4",
      path: "https://photos.app.goo.gl/vDXLQhaBH3JQPQz57",
      name: "Zip Zap Zoom Summer Camp",
    },
    {
      id: "ge5",
      path: "https://photos.app.goo.gl/W3PHL9WoPDGrSPEDA",
      name: "Biennial Concert",
    },
    {
      id: "ge6",
      path: "https://photos.app.goo.gl/AM95H35PtVQCVWdBA",
      name: "Biennial Sports Day",
    },
    {
      id: "ge7",
      path: "https://photos.app.goo.gl/mWthBtBM1PYczS5r9",
      name: "Zip Zap Zoom Talent Hunt",
    },
    {
      id: "ge8",
      path: "https://photos.app.goo.gl/PgdBqVd6nG8Y8xhLA",
      name: "Zip Zap Zoom Skating Competition",
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
          <div className="button-container">
            {buttonTitles.map((button) => (
              <Button
                key={button.id}
                title={button.title}
                onClick={() => handleButtonClick(button.title)}
                className={
                  selectedButton === button.title ? "active-button" : ""
                }
              />
            ))}
          </div>
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
