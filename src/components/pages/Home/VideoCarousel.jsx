import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./VideoCarousel.css"; 

const VideoCarousel = () => {
  const videos = [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4",
    "https://example.com/video3.mp4",
  ];

  return (
    <>
      <h1 className="main-heading__videocarousel">Videos</h1>
    <div className="videocarousel_wrapper">
      <div className="carousel-container">
        <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {videos.map((video, index) => (
            <div key={index} className="video-slide">
              <video controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </>
  );
};

export default VideoCarousel;
