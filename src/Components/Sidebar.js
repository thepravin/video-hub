import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 mt-16 shadow-lg w-48 cursor-pointer">
      <ul className="flex flex-col">
        <li className="flex items-center">
          <Link to={"/"}>
            <i className="fa-solid fa-house p-2"></i>
            <span className="ml-2">Home</span>
          </Link>
        </li>
        <li className="flex items-center">
          <i className="fa-solid fa-video p-2"></i>
          <span className="ml-2">Shorts</span>
        </li>
        <li className="flex items-center">
          <i className="fa-solid fa-bezier-curve p-2"></i>
          <span className="ml-2">Live</span>
        </li>
        <li className="flex items-center">
          <i className="fa-solid fa-clock-rotate-left p-2"></i>
          <span className="ml-2">History</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
