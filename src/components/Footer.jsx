import React from "react";
import "./Footer.css"; // Create a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          className="footer-img"
          src="/src/assets/img/lj-logo.png"
          alt="Logo"
        />
      </div>
      <div className="footer-center">
        <a href="https://maps.app.goo.gl/7rbfvYcyfaeBsX117" target="_blank">
          Plot No. 390, Traffic Park Main Road, Near Taori Marketing, Khare
          Town, Nagpur - 440010.
        </a>
        <a href="https://mail.google.com/mail/u/0/?pli=1#inbox" target="_blank">
          littlejewels2010@gmail.com
        </a>
        <a href="https://facebook.com" target="_blank">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank">
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank">
          LinkedIn
        </a>
      </div>
      <div className="footer-right">
        {/* Map displaying location */}
        {/* You can use a library like react-leaflet for maps */}
        {/* Example: */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3538495788366!2d79.0654915!3d21.138311899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c063d0ca7311%3A0x6dc46fcfc93b039f!2sLittle%20Jewels%20Kindergarten!5e0!3m2!1sen!2sin!4v1695137473426!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
