import React, { useState } from "react";

function Button({ title, onClick, className }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); 
    if (onClick) {
      onClick(); 
    }
  };

  return (
    <button
      className={`custom-button ${className} ${isActive ? "active-gallery" : ""}`}
      onClick={handleClick}
    >
      <span className="button-content">{title}</span>
    </button>
  );
}

export default Button;
