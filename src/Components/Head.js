import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSeggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // suggestion api call
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSeggestions(json[1]);
  };

  useEffect(() => {
    /* >>> Debouncing
      make an api call after every key press
      but if the difference between 2 api calls is < 200ms
      decline the API call 
    */
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      // component unmounted
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 mt-0 shadow-lg fixed top-0 w-full bg-white z-10">
      {/* first part */}
      <div className="flex col-span-1 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="hamburgerMenu"
          onClick={() => handleSidebar()}
          className="h-8 cursor-pointer"
        />
        <h1 className="font-bold text-3xl mx-2 ">𝓥𝓲𝓭𝓮𝓸𝓗𝓾𝓫</h1>
      </div>

      {/* middle part */}
      <div className="col-span-10 mx-auto">
        <div className="relative">
          <input
            placeholder="search here..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[450px] border border-gray-500 p-2 rounded-l-full focus:outline-none"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 px-3 py-2 rounded-r-full text-center bg-gray-200">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {showSuggestions && (
            <div className="absolute top-full left-0 bg-white px-2 w-[28rem] shadow-lg rounded-lg border border-gray-100 mt-1">
              <ul>
                {suggestions.map((search, index) => (
                  <li
                    key={index}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  >
                    <i className="fa-solid fa-magnifying-glass mr-2"></i>
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
