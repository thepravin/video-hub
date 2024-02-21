import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  return (
    <div className="flex">
      <Buttons title="All" />
      <Buttons title="Music" />
      <Buttons title="Mixes" />
      <Buttons title="Podcasts" />
      <Buttons title="Game shows" />
      <Buttons title="Live" />
      <Buttons title="TED" />
      <Buttons title="Sales" />
      <Buttons title="News" />
      <Buttons title="Sports" />
      <Buttons title="Fun" />
      <Buttons title="Watched" />
      <Buttons title="New to you" />
    </div>
  );
};

export default ButtonList;
