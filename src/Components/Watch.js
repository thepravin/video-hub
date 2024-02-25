import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import VideoData from "./VideoData";
import VideoBarContainer from "./VideoBarContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="p-5 mt-12 flex">
        <div className="w-2/3">
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?&mute=1&autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <VideoData id={searchParams.get("v")} />
          <CommentContainer id={searchParams.get("v")} />
        </div>
        <div className="w-1/3 ">
          <VideoBarContainer />
        </div>
      </div>
    </div>
  );
};

export default Watch;
