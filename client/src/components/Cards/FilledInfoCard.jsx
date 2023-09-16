import PropTypes from "prop-types";
import { useState } from "react";

function FilledInfoCard({ icon, title, action }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        isHovered ? "scale-105" : ""
      } transition-transform transform-gpu bg-white shadow-md rounded-lg p-3`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center">
        <h3 className="text-3xl font-semibold mb-3">{title}</h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-2/3">
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-lg p-2"
            onChange={(e) => action.funcT(e.target.value)}
            onBlur={(e) => action.func(e.target.value)}
            value={action.value || ""}
          />
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <h4 className="text-babyBlue font-italic font-bold">
            {action.unit ? action.unit.toUpperCase() : ""}
          </h4>
        </div>
      </div>
    </div>
  );
}

FilledInfoCard.defaultProps = {
  action: false,
};

FilledInfoCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      func: PropTypes.string.isRequired,
      funcT: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ]),
};

export default FilledInfoCard;
