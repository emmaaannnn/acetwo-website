import React, { useState } from "react";
import "../styles/magnifier.css"; // Add styles for smooth zoom

const Magnifier = ({ imageSrc, alt }) => {
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = (event.clientX - left) / width * 100;
    const y = (event.clientY - top) / height * 100;

    setZoomStyle({
      transform: `scale(2) translate(-${x}%, -${y}%)`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1) translate(0, 0)" });
  };

  return (
    <div className="magnifier-container">
      <img
        src={imageSrc}
        alt={alt}
        className="magnifier-image"
        style={zoomStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Magnifier;