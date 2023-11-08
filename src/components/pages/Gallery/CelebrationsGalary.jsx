import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";
import Button from "./Button";

function CelebrationsGallery() {
  const [selectedButton, setSelectedButton] = useState(null);

  let buttonTitles = [
    { id: "cb1", title: "Childrens Day Celebration" },
    { id: "cb2", title: "Diwali Celebration" },
    { id: "cb3", title: "Dusshera Celebration" },
    { id: "cb6", title: "Ganesh Chaturthi Celebration" },
    { id: "cb5", title: "Grand Parent's Day Celebration" },
    { id: "cb4", title: "Independence Day Celebration" },
    { id: "cb7", title: "Teacher's Day Celebration" },
    { id: "cb8", title: "Pola Celebration" },
    { id: "cb9", title: "Raksha Bandhan Celebration" },
    { id: "cb10", title: "Chritmas Day Celebration" },
    { id: "cb10", title: "Colour Day Celebrations" },
  ];

  let imageUrl = [
    {
      id: "c1",
      path: "/Gallery_Images/Celebrations_Images/dc1.jpg",
      name: "Diwali Celebration",
    },
    {
      id: "c2",
      path: "/Gallery_Images/Celebrations_Images/cdc2.JPG",
      name: "Childrens Day Celebration",
    },
    {
      id: "c3",
      path: "/Gallery_Images/Celebrations_Images/chritmasdc1.JPG",
      name: "Chritmas Day Celebration",
    },
    {
      id: "c4",
      path: "/Gallery_Images/Events_Images/HB.jpeg",
      name: "Healthy Bite",
    },
    {
      id: "c5",
      path: "/Gallery_Images/Celebrations_Images/toftw.JPG",
      name: "Talk of the Week",
    },
    {
      id: "c6",
      path: "/Gallery_Images/Celebrations_Images/rle.JPG",
      name: "Real Life Experience",
    },
    {
      id: "c7",
      path: "/Gallery_Images/Celebrations_Images/dussherac2.jpeg",
      name: "Dushera Celebration",
    },
    {
      id: "c8",
      path: "/Gallery_Images/Celebrations_Images/gcc1.jpg",
      name: "Ganesh Utsav",
    },
    {
      id: "c9",
      path: "/Gallery_Images/Celebrations_Images/gdc2.jpg",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "c10",
      path: "/Gallery_Images/Celebrations_Images/idc1.jpeg",
      name: "Independence Day Celebration",
    },
    {
      id: "c11",
      path: "/Gallery_Images/Celebrations_Images/tdc2.jpg",
      name: "Teacher's Day Celebration",
    },
    {
      id: "c12",
      path: "/Gallery_Images/Celebrations_Images/pc1.jpg",
      name: "Pola Celebration",
    },
    {
      id: "c13",
      path: "/Gallery_Images/Celebrations_Images/rc1.jpeg",
      name: "Raksha Bandhan Celebration",
    },
  ];

  let googlePictures = [
    {
      id: "gc1",
      path: "https://photos.app.goo.gl/brkZaFC36RQjQUkZA",
      name: "Diwali Celebration",
    },
    {
      id: "gc2",
      path: "https://photos.app.goo.gl/eQ5VrwKEjEswj3sJA",
      name: "Childrens Day Celebration",
    },
    {
      id: "gc3",
      path: "https://photos.app.goo.gl/mvhPAsw6UKPX2jA7A",
      name: "Dushera Celebration",
    },
    {
      id: "gc4",
      path: "https://photos.app.goo.gl/co8HRs6sdxtdN58z6",
      name: "Ganesh Chaturthi Celebration",
    },
    {
      id: "gc5",
      path: "https://photos.app.goo.gl/yUQ81R92KMt9Qi9x7",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "gc6",
      path: "https://photos.app.goo.gl/SHyn2ERcuhao4ttS6",
      name: "Independence Day Celebration",
    },
    {
      id: "gc7",
      path: "https://photos.app.goo.gl/w3k6BS8jzEUHSGrv7",
      name: "Teacher's Day Celebration",
    },
    {
      id: "gc8",
      path: "https://photos.app.goo.gl/ZctVd375EssS1hNk9",
      name: "Pola Celebration",
    },
    {
      id: "gc9",
      path: "https://photos.app.goo.gl/FfU7NPjLfGsgeXdd9",
      name: "Raksha Bandhan Celebration",
    },
    {
      id: "gc10",
      path: "https://photos.app.goo.gl/km4ia8FLjod7seyL7",
      name: "Chritmas Day Celebration",
    },
    {
      id: "gc11",
      path: "https://photos.app.goo.gl/rfRHu6Ae6cFGryZw6",
      name: "Talk of the Week",
    },
    {
      id: "gc12",
      path: "https://photos.app.goo.gl/xH4HbjbLMXSJoKar5",
      name: "Real Life Experience",
    },
    {
      id: "ge8",
      path: "https://photos.app.goo.gl/7r6b4vNQnyhEktKJ9",
      name: "Healthy Bite",
    },
  ];

  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };

  return (
    <>
    <div className="background-color-gallery">
      <div className="wrapper-gallery" >
        <h1 className="main-heading-gallery_title">Celebrations Gallery</h1>
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

export default CelebrationsGallery;
