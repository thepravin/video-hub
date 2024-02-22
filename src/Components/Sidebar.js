import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  // this is early return pattern
  if(!isMenuOpen){
    return null;
  }

  // else
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
         <Link to={"/"}> <i className="fa-solid fa-house p-2"></i>Home</Link>
        </li>
        <li>
          <i className="fa-solid fa-video p-2"></i>Shorts
        </li>
        <li>
          <i className="fa-solid fa-bezier-curve p-2"></i>Live
        </li>
        <li>
          <i className="fa-solid fa-clock-rotate-left p-2"></i>History
        </li>
      </ul>

      <h1 className="font-bold pt-5">
        <i className="fa-solid fa-layer-group pr-2"></i>Subscriptions
      </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">
        <i className="fa-solid fa-layer-group pr-2"></i>You
      </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
