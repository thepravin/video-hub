import React from "react";

const VideoCard = ({ info }) => {
  // Early return
  if (!info) return null;

  console.log(info)

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  const { viewCount } = statistics;

  // Convert publishedAt to days
  const currentDate = new Date();
  const videoDate = new Date(publishedAt);
  const timeDifference = currentDate - videoDate;
  const daysSincePublished = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Format view count
  let formattedViewCount;
  if (viewCount >= 1000000) {
    formattedViewCount = (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    formattedViewCount = (viewCount / 1000).toFixed(1) + "K";
  } else {
    formattedViewCount = viewCount.toString();
  }

  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img alt="thumbnails" src={thumbnails.medium.url} className="rounded-lg"/>
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
