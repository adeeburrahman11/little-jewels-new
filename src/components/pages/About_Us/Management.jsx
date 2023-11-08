import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";

function Management() {
  const [selectedButton, setSelectedButton] = useState(null);

  let imageUrls = [
    {
      id: "c1",
      path: "/About_Us_Images/Management_Images/shantilal-badjate-chairman.jpg",
      name: "Late Shri. Shantilal Badjate",
      designation: "Founder Chairman",
    }
  ]
  let imageUrl = [
    {
      id: "c2",
      path: "/About_Us_Images/Management_Images/anuj-badjate-director.jpg",
      name: "Anuj Badjate",
      designation: "Chairman",
    },
    {
      id: "c3",
      path: "/About_Us_Images/Management_Images/priti-badjate-director.png",
      name: "Priti Badjate",
      designation: "Director",
    },
    {
      id: "c4",
      path: "/About_Us_Images/Management_Images/tushar-badjate-trustee.jpg",
      name: "Tushar Badjate",
      designation: "Trustee",
    },
    {
      id: "c5",
      path: "/About_Us_Images/Management_Images/kamakshi-badjate.jpg",
      name: "Kamakshi Badjate",
      designation: "Member of Management",
    },
    {
      id: "c6",
      path: "/About_Us_Images/Management_Images/sanjeev-agrawal-ceo.png",
      name: "Sanjeev Agrawal",
      designation: "CEO",
    },
    {
      id: "c7",
      path: "/About_Us_Images/Management_Images/Anmol-Badjatia.png",
      name: "Anmol Badjatia",
      designation: "Principal",
    },
    {
      id: "c8",
      path: "/About_Us_Images/Management_Images/PPG.jpg",
      name: "Pooja Puniyani Gandhi",
      designation: "Headmistress",
    },
  ];

  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };

  return (
    <>
      <div className="head">
        <h1>Management </h1>
        {/* <p className="shadow">Management</p> */}
      </div>
      <div className="card-container-management">
        {imageUrls.map(
          (image, index) =>
            (selectedButton === null || selectedButton === image.name) && (
              <Card
                key={index}
                path={image.path}
                name={image.name}
                designation={image.designation}
              />
            )
        )}
      </div>

      <div className="card-container-management">
        {imageUrl.map(
          (image, index) =>
            (selectedButton === null || selectedButton === image.name) && (
              <Card
                key={index}
                path={image.path}
                name={image.name}
                designation={image.designation}
              />
            )
        )}
      </div>
    </>
  );
}

export default Management;
