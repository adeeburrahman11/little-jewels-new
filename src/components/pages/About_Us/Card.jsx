import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const openGooglePhotosLink = () => {
    const matchingItem = props.googlePictures.find(
      (item) => item.name === props.name
    );

    if (matchingItem) {
      window.open(matchingItem.path, "_blank");
    }
  };

  return (
    <div
      className={`card-management ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content-management">
        <div className="card-header-management">
          <div className="card-image-container-management ">
            <img
              src={props.path}
              alt={props.name}
              className={`card-image-management ${isHovered ? "hovered" : ""}`}
            />
          </div>
          <h2 className={`card-title-management ${isHovered ? "hidden" : ""}`}>
            {props.name}
          </h2>
        </div>
        <div className={`card-description-management ${isHovered ? "slide-up" : ""}`}>
          {props.designation}
        </div>
      </div>
    </div>
  );
};

export default Card;
