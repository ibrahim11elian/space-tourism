function TechFilterButton({ onSelect, index, activeIndex }) {
  return (
    <button
      onClick={() => onSelect(index)}
      className={`h-10 w-10 rounded-full border border-white/50 font-bellefair text-lg transition-colors duration-300 hover:bg-white hover:text-black md:h-12 md:w-12 md:text-xl lg:h-16 lg:w-16 lg:text-2xl ${activeIndex === index ? "bg-white text-black" : "bg-transparent text-white"}`}
    >
      {index + 1}
    </button>
  );
}

export default TechFilterButton;
