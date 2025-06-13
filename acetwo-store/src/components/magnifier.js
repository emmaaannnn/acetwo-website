import React, { useState, useRef } from "react";

const Magnifier = ({ imageSrc, alt, zoom = 2 }) => {
  const [showZoom, setShowZoom] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "500px",
    cursor: "zoom-in",
  };

  const imageStyle = {
    display: "block",
    width: "100%",
    height: "auto",
    transition: "opacity 0.3s ease",
    opacity: showZoom ? 0 : 1,
  };

  const zoomStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: backgroundPosition,
    backgroundSize: `${zoom * 100}%`,
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        style={imageStyle}
      />
      {showZoom && <div style={zoomStyle} />}
    </div>
  );
};

export default Magnifier;
