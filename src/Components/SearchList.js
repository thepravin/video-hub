import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_VIDEO_LIST } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";

const SearchList = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [videoData, setVideoData] = useState([]);

  // ************ SEARCH VIDEO api
  const searchListVideos = async () => {
    const data = await fetch(SEARCH_VIDEO_LIST + searchQuery);
    const json = await data.json();
    //console.log(json.items)
    setVideoData(json.items);
  };
  useEffect(() => {
    searchListVideos();
  }, [searchQuery]);

  return (
    <div className="mt-12 p-6">
      {videoData.map((item) => (
        <Link to={"/watch?v=" + item.id.videoId}>
          <SearchVideoCard key={item.id.videoId} data={item} />
        </Link>
      ))}
    </div>
  );
};

export default SearchList;
