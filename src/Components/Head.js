import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
const dispatch = useDispatch();

const handleSidebar = ()=>{
  dispatch(toggleMenu())
}

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      {/* first part */}
      <div className="flex col-span-1 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
         alt="hamburgerMenu"
        onClick={()=>handleSidebar()}
         className="h-8 cursor-pointer"
        />
        <h1 className="font-bold text-3xl mx-2 ">𝓥𝓲𝓭𝓮𝓸𝓗𝓾𝓫</h1>
      </div>

      {/* middle part */}
      <div className="col-span-10 m-auto">
        <input placeholder="search here..." type="text" className="w-[450px] border border-gray-500 p-2 rounded-l-full" />
        <button className="border border-gray-500 px-3 py-2 rounded-r-full text-center bg-gray-200">🔍</button>
      </div>

      {/* last part */}
      <div className="col-span-1">
        <img
          alt="userIcon"
          src="https://www.svgrepo.com/show/350417/user-circle.svg"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
