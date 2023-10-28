import React from 'react';
import './MediaLinks.css'; // Import the CSS file for styling (adjust the filename as needed)

const MediaLinks = () => {
  return (
    <div className="media-links-container">
      <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-media-link">
        <div className="social-media-icon whatsapp"></div>
      </a>
      <a href="https://instagram.com/littlejewelskindergarten?igshid=YTQwZjQ0NmI0OA==
" target="_blank" rel="noopener noreferrer" className="social-media-link">
        <div className="social-media-icon instagram"></div>
      </a>
      <a href="https://www.youtube.com/@littlejewelskindergarten8888/featured
" target="_blank" rel="noopener noreferrer" className="social-media-link">
        <div className="social-media-icon youtube"></div>
      </a>
      <a href="https://www.facebook.com/littlejewels001?mibextid=LQQJ4d
" target="_blank" rel="noopener noreferrer" className="social-media-link">
        <div className="social-media-icon facebook"></div>
      </a>
    </div>
  );
};

export default MediaLinks;
