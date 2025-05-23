import React from "react";
import restoranImage from "../assets/sedapbgt.png";

export default function HeaderUtama() {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={restoranImage}
        alt="Restoran Sedap"
        className="w-full object-cover"
        style={{ height: "500px" }} // Atur tinggi sesuai kebutuhan
      />
    </div>
  );
}
