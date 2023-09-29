import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";

function Management() {
  const [selectedButton, setSelectedButton] = useState(null);

  let imageUrl = [
    {
      id: "c1",
      path: "/images/management/shantilal-badjate-chairman.jpg",
      name: "Shantilal Badjate",
      designation: "Founder Chairman",
    },
    {
      id: "c2",
      path: "/images/management/anuj-badjate-director.jpg",
      name: "Anuj Badjate",
      designation: "Director",
    },
    {
      id: "c3",
      path: "/images/management/priti-badjate-director.png",
      name: "Priti Badjate",
      designation: "Director",
    },
    {
      id: "c4",
      path: "/images/management/tushar-badjate-trustee.jpg",
      name: "Tushar Badjate",
      designation: "Trustee",
    },
    {
      id: "c5",
      path: "/images/management/kamakshi-badjate.jpg",
      name: "Kamakshi Badjate",
      designation: "Member of Management",
    },
    {
      id: "c6",
      path: "/images/management/sanjeev-agrawal-ceo.png",
      name: "Sanjeev Agrawal",
      designation: "CEO",
    },
    {
      id: "c7",
      path: "/images/management/Anmol-Badjatia.png",
      name: "Anmol Badjatia",
      designation: "Advisor",
    },
    {
      id: "c8",
      path: "/images/management/shanthi-menon.png",
      name: "Shanthi Menon",
      designation: "Principal",
    },
  ];

  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };

  return (
    <>
      <div className="head">
        <h1>Management </h1>
        <p className="shadow">Management</p>
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
