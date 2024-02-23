import React from "react";
import { formattedCount, publicshedAgo } from "../utils/functions";

const VideoCard = ({ info }) => {
  // Early return
  if (!info) return null;

  // console.log(info)

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
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        className="rounded-lg"
      />
      <h3 className="font-bold">{title}</h3>
      <h4>{channelTitle}</h4>
      <div className="flex">
        <h5>{`${formattedViewCount} views`}</h5>
        <h5>•</h5>
        <h5>{`${daysSincePublished} days ago`}</h5>
      </div>
    </div>
  );
};

export default VideoCard;
