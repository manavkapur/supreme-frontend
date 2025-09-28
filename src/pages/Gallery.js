import React from "react";

function Gallery() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Work</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <img src="https://via.placeholder.com/200" alt="Fence 1" />
        <img src="https://via.placeholder.com/200" alt="Fence 2" />
        <img src="https://via.placeholder.com/200" alt="Fence 3" />
      </div>
    </div>
  );
}

export default Gallery;
