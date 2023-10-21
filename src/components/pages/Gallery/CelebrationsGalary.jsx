import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";
import Button from "./Button";

function CelebrationsGallery() {
  const [selectedButton, setSelectedButton] = useState(null);

  let buttonTitles = [
    { id: "cb1", title: "Childrens Day Celebration" },
    { id: "cb2", title: "Diwali Celebration" },
    { id: "cb3", title: "Dushera Celebration" },
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
      path: "/Gallery_Images/Celebrations_Images/dc2.jpg",
      name: "Diwali Celebration",
    },
    {
      id: "c3",
      path: "/Gallery_Images/Celebrations_Images/cdc1.jpg",
      name: "Childrens Day Celebration",
    },
    {
      id: "c4",
      path: "/Gallery_Images/Celebrations_Images/cdc2.JPG",
      name: "Childrens Day Celebration",
    },
    {
      id: "c5",
      path: "/Gallery_Images/Celebrations_Images/dussherac1.jpeg",
      name: "Dushera Celebration",
    },
    {
      id: "c6",
      path: "/Gallery_Images/Celebrations_Images/dussherac2.jpeg",
      name: "Dushera Celebration",
    },
    {
      id: "c7",
      path: "/Gallery_Images/Celebrations_Images/gcc1.jpg",
      name: "Ganesh Chaturthi Celebration",
    },
    {
      id: "c8",
      path: "/Gallery_Images/Celebrations_Images/gcc2.jpg",
      name: "Ganesh Chaturthi Celebration",
    },
    {
      id: "c9",
      path: "/Gallery_Images/Celebrations_Images/gdc1.jpg",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "c10",
      path: "/Gallery_Images/Celebrations_Images/gdc2.jpg",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "c11",
      path: "/Gallery_Images/Celebrations_Images/idc1.jpeg",
      name: "Independence Day Celebration",
    },
    {
      id: "c12",
      path: "/Gallery_Images/Celebrations_Images/idc2.jpeg",
      name: "Independence Day Celebration",
    },
    {
      id: "c13",
      path: "/Gallery_Images/Celebrations_Images/tdc1.JPG",
      name: "Teacher's Day Celebration",
    },
    {
      id: "c14",
      path: "/Gallery_Images/Celebrations_Images/tdc2.jpg",
      name: "Teacher's Day Celebration",
    },
    {
      id: "c15",
      path: "/Gallery_Images/Celebrations_Images/pc1.jpg",
      name: "Pola Celebration",
    },
    {
      id: "c16",
      path: "/Gallery_Images/Celebrations_Images/pc2.jpg",
      name: "Pola Celebration",
    },
    {
      id: "c17",
      path: "/Gallery_Images/Celebrations_Images/rc1.jpeg",
      name: "Raksha Bandhan Celebration",
    },
    {
      id: "c18",
      path: "/Gallery_Images/Celebrations_Images/rc2.jpeg",
      name: "Raksha Bandhan Celebration",
    },
    {
      id: "c19",
      path: "/Gallery_Images/Celebrations_Images/chritmasdc1.JPG",
      name: "Chritmas Day Celebration",
    },
    {
      id: "c20",
      path: "/Gallery_Images/Celebrations_Images/chritmasdc2.JPG",
      name: "Chritmas Day Celebration",
    },
    {
      id: "c21",
      path: "/Gallery_Images/Celebrations_Images/dc3.jpg",
      name: "Diwali Celebration",
    },
    {
      id: "c3",
      path: "/Gallery_Images/Celebrations_Images/cdc3.jpg",
      name: "Childrens Day Celebration",
    },
    {
      id: "c5",
      path: "/Gallery_Images/Celebrations_Images/dussherac3.jpeg",
      name: "Dushera Celebration",
    },
    {
      id: "c7",
      path: "/Gallery_Images/Celebrations_Images/gcc3.jpg",
      name: "Ganesh Chaturthi Celebration",
    },
    {
      id: "c9",
      path: "/Gallery_Images/Celebrations_Images/gdc3.jpeg",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "c11",
      path: "/Gallery_Images/Celebrations_Images/idc3.jpeg",
      name: "Independence Day Celebration",
    },
    {
      id: "c13",
      path: "/Gallery_Images/Celebrations_Images/tdc3.JPG",
      name: "Teacher's Day Celebration",
    },
    {
      id: "c15",
      path: "/Gallery_Images/Celebrations_Images/pc3.jpg",
      name: "Pola Celebration",
    },
    {
      id: "c17",
      path: "/Gallery_Images/Celebrations_Images/rc3.jpeg",
      name: "Raksha Bandhan Celebration",
    },
    {
      id: "c19",
      path: "/Gallery_Images/Celebrations_Images/chritmasdc3.JPG",
      name: "Chritmas Day Celebration",
    },
    {
      id: "c20",
      path: "/Gallery_Images/Celebrations_Images/colordc1.jpeg",
      name: "Colour Day Celebrations",
    },
    {
      id: "c21",
      path: "/Gallery_Images/Celebrations_Images/colordc2.jpeg",
      name: "Colour Day Celebrations",
    },
    {
      id: "c22",
      path: "/Gallery_Images/Celebrations_Images/colordc3.jpeg",
      name: "Colour Day Celebrations",
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
  ];

  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };

  return (
    <>
    <div className="background-color-gallery">
      <div className="wrapper-gallery" >
        <h1 className="main-heading-gallery_title">Celebrations Gallery</h1>
        <div className="button-container">
          {buttonTitles.map((button) => (
            <Button
              key={button.id}
              title={button.title}
              onClick={() => handleButtonClick(button.title)}
              className={selectedButton === button.title ? "active-button" : ""}
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

export default CelebrationsGallery;
