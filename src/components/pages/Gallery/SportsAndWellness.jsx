import React, { useState } from "react";
import "./CardSandW.css";
import CardACM from "./CardACM";

function SportsAndWellness() {
    const [selectedButton, setSelectedButton] = useState(null);
    let imageUrl = [
        {
          id: 1,
          path: "/Gallery_Images/SportsAndWellness_Images/saw1.JPG",
          name: "",
        },
        {
            id: 2,
            path: "/Gallery_Images/SportsAndWellness_Images/saw15.JPG",
            name: "",
        },
        {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw13.JPG",
            name: "",
        },
        {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw14.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw5.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw11.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw7.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw8.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw9.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw10.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw6.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw12.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw4.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw3.JPG",
            name: "",
          },
          {
            id: 1,
            path: "/Gallery_Images/SportsAndWellness_Images/saw2.JPG",
            name: "",
          },
    ]

    return (
        <>
          <div className="background-color-gallery">
            <div className="wrapper-gallery">
              <h1 className="main-heading-gallery_title">Sports and Wellness</h1>
              <div className="card-container">
                {imageUrl.map(
                  (image, index) =>
                    (selectedButton === null || selectedButton === image.name) && (
                      <CardACM
                        key={index}
                        path={image.path}
                        name={image.name}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default SportsAndWellness;

