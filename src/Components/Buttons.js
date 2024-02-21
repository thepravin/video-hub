import React from "react";

const Buttons = ({ title }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2  bg-gray-400 rounded-lg hover:bg-gray-300">
        {title}
      </button>
    </div>
  );
};

export default Buttons;
