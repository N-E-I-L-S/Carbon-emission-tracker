import PropTypes from "prop-types";
import { useState } from "react";

function FilledInfoCard({ icon, title, action }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        isHovered ? "scale-105" : ""
      } transition-transform transform-gpu shadow-md rounded-md p-2 p-6 rounded-[30px] shadow-lg border border-white-1000`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-grow border-2 rounded-lg p-2 bg-transparent border-black-300"
          onChange={(e) => action.funcT(e.target.value)}
          onBlur={(e) => action.func(e.target.value)}
          value={action.value || ""}
        />
        <div className="flex items-center ml-2">
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
