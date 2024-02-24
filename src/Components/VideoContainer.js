import React, { useEffect, useState } from "react";
import { YOUTUB_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  // *************** API call **************
  const getVideos = async () => {
    const data = await fetch(YOUTUB_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {videos.map((video, index) => (
       <Link to={"/watch?v="+video.id}><VideoCard key={index} info={video} /></Link> 
      ))}
    </div>
  );
};

export default VideoContainer;
