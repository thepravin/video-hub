import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.cache);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Click outside the search box, hide suggestions
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSidebar = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (clickedSuggestion) => {
    setSearchQuery(clickedSuggestion);
    setShowSuggestions(false);    
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 mt-0 shadow-lg fixed top-0 w-full bg-white z-10">
      <div className="flex col-span-1 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="hamburgerMenu"
          onClick={() => handleSidebar()}
          className="h-8 cursor-pointer"
        />
        <h1 className="font-bold text-3xl mx-2 ">𝓥𝓲𝓭𝓮𝓸𝓗𝓾𝓫</h1>
      </div>

      <div className="col-span-10 mx-auto">
        <div className="relative">
          <input
            placeholder="search here..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[450px] border border-gray-500 p-2 rounded-l-full focus:outline-none"
            onFocus={() => setShowSuggestions(true)}
            ref={inputRef}
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
                    onClick={() => handleSuggestionClick(search)}
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
