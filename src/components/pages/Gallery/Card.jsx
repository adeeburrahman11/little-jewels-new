import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const openGooglePhotosLink = () => {
    const matchingItem = props.googlePictures.find((item) => item.name === props.name);

    if (matchingItem) {
      window.open(matchingItem.path, '_blank');
    }
  };

  return (
    <div className={`card ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="card-content">
        <div className='card-header'>
          <div className="card-image-container ">
            <img
              src={props.path}
              alt={props.name}
              className={`card-image ${isHovered ? 'hovered' : ''}`}
            />
          </div>
          <h2 className={`card-title ${isHovered ? 'hidden' : ''}`}>{props.name}</h2>
        </div>
        <div className={`card-description ${isHovered ? 'slide-up' : ''}`}>
          <h4>
          In the colorful world of kindergarten, little ones eagerly anticipate events  where they do their brightest hues and the excitement of the First Day of School, marking the start of their educational journey.
          </h4>
          <button className="card-button" onClick={openGooglePhotosLink}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
