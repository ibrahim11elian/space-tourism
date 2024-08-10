import React from "react";

function CrewFilterButton({ onSelect, index, activeIndex }) {
  return (
    <button
      onClick={() => onSelect(index)}
      className={`h-3 w-3 rounded-full transition-colors duration-300 hover:bg-white xl:h-5 xl:w-5 ${activeIndex === index ? "bg-white" : "bg-white/20"}`}
    ></button>
  );
}

export default CrewFilterButton;
