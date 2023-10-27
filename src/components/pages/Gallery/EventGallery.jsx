import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";
// import Button from "./Button";

function EventGallery() {
  const [selectedButton, setSelectedButton] = useState(null);

  let buttonTitles = [
    { id: "b1", title: "Biennial Concert" },
    { id: "b2", title: "Biennial Sports Day" },
    { id: "b3", title: "Zip Zap Zoom Talent Hunt" },
    { id: "b4", title: "Zip Zap Zoom Summer Camp" },
    { id: "b5", title: "Yes, I Can!" },
    { id: "b6", title: "First Day of School" },
  ];

  let imageUrl = [
    {
      id: 1,
      path: "/Gallery_Images/Events_Images/fdofs1.JPG",
      name: "First Day of School",
    },
    {
      id: 2,
      path: "/Gallery_Images/Events_Images/HB.jpeg",
      name: "Healthy Bite",
    },
    // {
    //   id: 3,
    //   path: "/Gallery_Images/Events_Images/yic1.JPG",
    //   name: "Yes, I Can!",
    // },
    // {
      //   id: 5,
      //   path: "/Gallery_Images/Events_Images/zzzsc1.jpeg",
      //   name: "Zip Zap Zoom Summer Camp",
      // },
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
    // {
    //   id: 8,
    //   path: "/Gallery_Images/Events_Images/concert6.JPG",
    //   name: "Biennial Concert",
    // },
    {
      id: 9,
      path: "/Gallery_Images/Events_Images/sports3.JPG",
      name: "Biennial Sports Day",
    },
    // {
    //   id: 10,
    //   path: "/Gallery_Images/Events_Images/sports5.JPG",
    //   name: "Biennial Sports Day",
    // },
    {
      id: 11,
      path: "/Gallery_Images/Events_Images/zzz1.JPG",
      name: "Zip Zap Zoom Talent Hunt",
    },
    // {
    //   id: 12,
    //   path: "/Gallery_Images/Events_Images/zzz2.JPG",
    //   name: "Zip Zap Zoom Talent Hunt",
    // },
    // {
    //   id: 13,
    //   path: "/Gallery_Images/Events_Images/fdofs3.JPG",
    //   name: "First Day of School",
    // },
    // {
    //   id: 14,
    //   path: "/Gallery_Images/Events_Images/yic3.JPG",
    //   name: "Yes, I Can!",
    // },
    // {
    //   id: 15,
    //   path: "/Gallery_Images/Events_Images/zzzsc3.JPG",
    //   name: "Zip Zap Zoom Summer Camp",
    // },
    // {
    //   id: 16,
    //   path: "/Gallery_Images/Events_Images/concert8.JPG",
    //   name: "Biennial Concert",
    // },
    // {
    //   id: 17,
    //   path: "/Gallery_Images/Events_Images/sports8.JPG",
    //   name: "Biennial Sports Day",
    // },
    // {
    //   id: 18,
    //   path: "/Gallery_Images/Events_Images/zzz3.JPG",
    //   name: "Zip Zap Zoom Talent Hunt",
    // },
  ];

  let googlePictures = [
    {
      id: "ge1",
      path: "https://photos.app.goo.gl/YzbueL5yxoDXeJtK8",
      name: "First Day of School",
    },
    {
      id: "ge2",
      path: "https://photos.app.goo.gl/kMGJUHFZHScsV3eb8",
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
      path: "https://photos.app.goo.gl/mWthBtBM1PYczS5r9",
      name: "Zip Zap Zoom Talent Hunt",
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
          {/* <div className="button-container">
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
          </div> */}
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
