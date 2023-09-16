import PropTypes from "prop-types";
import { useState } from "react";

function Character({ image, title, content, type }) {
  const [isHovered, setIsHovered] = useState(false);

  // Define background colors based on the type of character
  const backgroundColorClass = {
    hero: "bg-green-100",    // Green background for Climate Hero
    fairEnough: "bg-blue-100", // Blue background for Fair Enough
    thug: "bg-red-100",       // Red background for Climate Thug
  }[type];

  return (
    <div className={`shadow-md rounded-lg overflow-hidden w-80 mx-auto flex mb-10 ${backgroundColorClass}`}>
      {/* Left Side */}
      <div className="w-2/3 p-4 flex-grow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>

      {/* Right Side (Image) */}
      <div className="w-1/3">
        <img src={image} alt="Card Image" className="w-full h-auto" />
      </div>
    </div>
  );
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["hero", "fairEnough", "thug"]).isRequired, // Type of character
};

export default Character;