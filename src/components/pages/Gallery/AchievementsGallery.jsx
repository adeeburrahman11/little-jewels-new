import * as React from "react";
import "./Card.css";
import Card from "./Card";

function AchievementsGallery() {
  let imageUrl = [
    {
      id: "a1",
      path: "/images/achievements/(Sr.No. A) IMPACT COMPETITION (ACT PRESENTATION).jpg",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "a2",
      path: "/images/achievements/(Sr.No. B & C) SANDHAMAKA SEASON 1 COMPETITION (DANCE & FANCY DRESS).jpg",
      name: "Sandhamaka Season 1 Competition (Dance & Fancy Dress)",
    },
    {
      id: "a3",
      path: "/images/achievements/(Sr.No. D) OPEN INVITATIONAL ROLLER SKATING CHAMPIONSHIP 2022.jpeg",
      name: "Open Invitational Roller skating Championship 2022",
    },
    {
      id: "a4",
      path: "/images/achievements/(Sr.No. A) IMPACT COMPETITION (ACT PRESENTATION).jpg",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "a5",
      path: "/images/achievements/(Sr.No. E) OPEN DISTRICT ROLLER SKATING CHAMPIONSHIP 2022.jpeg",
      name: "Open District Roller Skating Chapionship 2022",
    },
    {
      id: "a6",
      path: "/images/achievements/(Sr.No. F) ROLLER SKATING CHAMPIONSHIP 2022.jpg",
      name: "Roller Skating Chapionship 2022",
    },
    {
      id: "a7",
      path: "/images/achievements/(Sr.No. G) INTER-CLUB SKATING CHAMPIONSHIP 2022.jpg",
      name: "Inter-Club Skating Championship 2022",
    },
    {
      id: "a8",
      path: "/images/achievements/(Sr.No. H) INTER-CLUB SKATING CHAMPIONSHIP 2022.jpg",
      name: "Inter-Club Skating Chapionship 2022",
    },
    {
      id: "a9",
      path: "/images/achievements/achievements1.JPG",
      name: "Inter Branch Skating",
    },
    {
      id: "a10",
      path: "/images/achievements/achievements2.JPG",
      name: "Inter School Colouring Competition",
    },
    {
      id: "a11",
      path: "/images/achievements/achievements3.jpeg",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "a12",
      path: "/images/achievements/OUR VISION.jpg",
      name: "zip Zap Zoom Skating Competition Winner 2022",
    },
  ];

  let googlePictures = [
    {
      id: "g1",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "g2",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Sandhamaka Season 1 Competition (Dance & Fancy Dress)",
    },
    {
      id: "g3",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Open Invitational Roller skating Championship 2022",
    },
    {
      id: "g4",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "g5",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Open District Roller Skating Chapionship 2022",
    },
    {
      id: "g6",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Roller Skating Chapionship 2022",
    },
    {
      id: "g7",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Inter-Club Skating Championship 2022",
    },
    {
      id: "g8",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Inter-Club Skating Chapionship 2022",
    },
    {
      id: "g9",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Inter Branch Skating",
    },
    {
      id: "g10",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Inter School Colouring Competition",
    },
    {
      id: "g11",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "g12",
      path: "https://photos.app.goo.gl/xxo3SWL8DBKy8Knx6",
      name: "zip Zap Zoom Skating Competition Winner 2022",
    },
  ];

  return (
    <>
    <div className="background-color-gallery">
      <div className="wrapper-gallery">
        <h1 className="main-heading-gallery_title">Achievements Gallery</h1>
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

export default AchievementsGallery;
