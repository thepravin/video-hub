import React from "react";
import { formattedCount, publicshedAgo } from "../utils/functions";
import { useSelector } from "react-redux";

const VideoBarCard = ({ info }) => {
  const sideBarStatus = useSelector(store => store.app.isMenuOpen);

  // Early return
  if (!info) return null;

  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  const { viewCount } = statistics;

  // Convert publishedAt to days
  const daysSincePublished =
    publishedAt !== undefined ? publicshedAgo(publishedAt) : "";

  // Format view count
  const formattedViewCount =
    viewCount !== undefined ? formattedCount(viewCount) : "";

  return (
    <div className={`p-2 m-2 ml-6 ${sideBarStatus ? 'ml-28' : ''}`}>
      <div className={`${sideBarStatus ? '' : 'flex flex-row'} items-center`} >
        <img
          alt="thumbnails"
          src={thumbnails.medium.url}
          className="rounded-lg h-28"
        />
        <div className="ml-1">
          <h3 className="font-bold text-sm break-all">{title}</h3>
          <div className="flex flex-row">
            <h4 className="text-gray-600">{channelTitle}</h4>
            <h5 className="ml-2 text-gray-600">{`${formattedViewCount} views`}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBarCard;
