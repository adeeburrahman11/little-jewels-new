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
  ];

  let imageUrl = [
    {
      id: "c1",
      path: "/images/celebrations/diwali1.jpg",
      name: "Diwali Celebration",
    },
    {
      id: "c2",
      path: "/images/celebrations/diwali2.jpg",
      name: "Diwali Celebration",
    },
    {
      id: "c3",
      path: "/images/celebrations/childrens day (6).jpg",
      name: "Childrens Day Celebration",
    },
    {
      id: "c4",
      path: "/images/celebrations/childrens day (23).jpg",
      name: "Childrens Day Celebration",
    },
    {
      id: "c5",
      path: "/images/celebrations/dussehra (3).jpeg",
      name: "Dushera Celebration",
    },
    {
      id: "c6",
      path: "/images/celebrations/dussehra (12).jpeg",
      name: "Dushera Celebration",
    },
    {
      id: "c7",
      path: "/images/celebrations/ganesh1.jpeg",
      name: "Ganesh Chaturthi Celebration",
    },
    {
      id: "c8",
      path: "/images/celebrations/ganesh2.jpeg",
      name: "Ganesh Chaturthi Celebration",
    },
    {
      id: "c9",
      path: "/images/celebrations/grandparent1.jpg",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "c10",
      path: "/images/celebrations/grandparent2.jpg",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "c11",
      path: "/images/celebrations/independence1.jpeg",
      name: "Independence Day Celebration",
    },
    {
      id: "c12",
      path: "/images/celebrations/independence2.jpg",
      name: "Independence Day Celebration",
    },
    {
      id: "c13",
      path: "/images/celebrations/teacher day (1).jpeg",
      name: "Teacher's Day Celebration",
    },
    {
      id: "c14",
      path: "/images/celebrations/teacher day (14).jpeg",
      name: "Teacher's Day Celebration",
    },
    {
      id: "c15",
      path: "/images/celebrations/pola (4).jpeg",
      name: "Pola Celebration",
    },
    {
      id: "c16",
      path: "/images/celebrations/pola (9).jpeg",
      name: "Pola Celebration",
    },
    {
      id: "c17",
      path: "/images/celebrations/raksha-bandhan1.jpeg",
      name: "Raksha Bandhan Celebration",
    },
    {
      id: "c18",
      path: "/images/celebrations/raksha-bandhan2.jpg",
      name: "Raksha Bandhan Celebration",
    },
    {
      id: "c19",
      path: "/images/celebrations/xmas-1.jpg",
      name: "Chritmas Day Celebration",
    },
    {
      id: "c20",
      path: "/images/celebrations/xmas-2.jpg",
      name: "Chritmas Day Celebration",
    },
    {
      id: "c21",
      path: "/images/celebrations/diwali1.jpg",
      name: "Diwali Celebration",
    },
    {
      id: "c3",
      path: "/images/celebrations/childrens day (6).jpg",
      name: "Childrens Day Celebration",
    },
    {
      id: "c5",
      path: "/images/celebrations/dussehra (3).jpeg",
      name: "Dushera Celebration",
    },
    {
      id: "c7",
      path: "/images/celebrations/ganesh1.jpeg",
      name: "Ganesh Chaturthi Celebration",
    },
    {
      id: "c9",
      path: "/images/celebrations/grandparent1.jpg",
      name: "Grand Parent's Day Celebration",
    },
    {
      id: "c11",
      path: "/images/celebrations/independence1.jpeg",
      name: "Independence Day Celebration",
    },
    {
      id: "c13",
      path: "/images/celebrations/teacher day (1).jpeg",
      name: "Teacher's Day Celebration",
    },
    {
      id: "c15",
      path: "/images/celebrations/pola (4).jpeg",
      name: "Pola Celebration",
    },
    {
      id: "c17",
      path: "/images/celebrations/raksha-bandhan1.jpeg",
      name: "Raksha Bandhan Celebration",
    },
    {
      id: "c19",
      path: "/images/celebrations/xmas-1.jpg",
      name: "Chritmas Day Celebration",
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
