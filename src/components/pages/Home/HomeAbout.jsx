import React from "react";
import "./HomeAbout.css";

export const HomeAbout = () => {
  return (
    <div className="about-main">
      <h1 className="about-heading">About Us</h1>
      <div className="about-container">
        <div className="image-container">
          <img src="/src/assets/img/pexels-rdne-stock-project-8363102.jpg" />
        </div>
        <div className="text-container">
          <p>
            Little Jewels Kindergarten is a feeder Kindergarten of Jain
            International School, Nagpur. Little Jewels is among the leading
            kindergartens of Nagpur. It is managed by Sir Shantilal Badjate
            Charitable Trust, which also runs Jain International School, Nagpur
            (A CBSE school) and S. B. Jain Institute of Technology, Management &
            Research, Nagpur.
          </p>
        </div>
      </div>
      <div className="about-container1">
        <div className="image-container1">
          <img src="/src/assets/img/pexels-rdne-stock-project-8363102.jpg" />
        </div>
        <div className="text-container1">
          <p>
            Little Jewels is a place where children learn, play and grow. It s
            not just a kindergarten but a home, full of love and affection to
            ensure the physical, mental, emotional, cognitive and social
            development of every young mind. Our aim is to encourage children to
            be self disciplined, innovative, caring, tolerant, honest and
            friendly. We, at Little Jewels strive to provide a secure and happy
            learning environment to the children.
          </p>
        </div>
      </div>
      <div className="about-btns">
        <button>Learn More</button>
      </div>
    </div>
  );
};
