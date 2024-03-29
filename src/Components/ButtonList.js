import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Mixes",
    "Podcasts",
    "Game shows",
    "Live",
    "TED",
    "Sales",
    "News",
    "Sports",
    "Fun",
    "Watched",
    "New to you",
    
  ];

  return (
    <div className="flex mt-16 justify-center ">
      {list.map((item, index) => (
        <Buttons key={index} title={list[index]} />
      ))}
    </div>
  );
};

export default ButtonList;
