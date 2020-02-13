import React from "react";

export default function Slot({ pic }) {
  return (
    <div
      className="flex-row slots hvr-grow"
      style={{  margin: "25px", width: "300px" }}
    >
      <img src={pic} alt={`${pic}`}  />
    </div>
  );
}
