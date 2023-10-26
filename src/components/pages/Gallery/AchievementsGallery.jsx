import * as React from "react";
import "./Card.css";
import CardACM from "./CardACM";

function AchievementsGallery() {
  let imageUrl = [
    {
      id: "a1",
      path: "/Gallery_Images/Achievements_Images/ag1.jpeg",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "a2",
      path: "/Gallery_Images/Achievements_Images/ag2.jpg",
      name: "Sandhamaka Season 1 Competition (Dance & Fancy Dress)",
    },
    {
      id: "a3",
      path: "/Gallery_Images/Achievements_Images/ag3.jpeg",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "a4",
      path: "/Gallery_Images/Achievements_Images/ag4.jpg",
      name: "Roller Skating Chapionship 2022",
    },
    {
      id: "a5",
      path: "/Gallery_Images/Achievements_Images/ag5.jpg",
      name: "Open District Roller Skating Chapionship 2022",
    },
    {
      id: "a6",
      path: "/Gallery_Images/Achievements_Images/ag6.jpg",
      name: "Impact Competition (Act Presentation)",
    },
    {
      id: "a7",
      path: "/Gallery_Images/Achievements_Images/ag7.jpg",
      name: "Inter-Club Skating Championship 2022",
    },
    {
      id: "a8",
      path: "/Gallery_Images/Achievements_Images/ag8.jpg",
      name: "Inter-Club Skating Chapionship 2022",
    },
    {
      id: "a9",
      path: "/Gallery_Images/Achievements_Images/ag9.jpg",
      name: "Inter Branch Skating",
    },
    {
      id: "a10",
      path: "/Gallery_Images/Achievements_Images/ag10.jpg",
      name: "Inter School Colouring Competition",
    },
    {
      id: "a11",
      path: "/Gallery_Images/Achievements_Images/ag11.jpg",
      name: "Open Invitational Roller skating Championship 2022",
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
            <CardACM
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
