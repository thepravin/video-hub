import React, { useEffect, useState } from "react";
import { VIDEO_DATA_API } from "../utils/constants";
import { formattedCount, publicshedAgo } from "../utils/functions";

const VideoData = ({ id }) => {
  const [dataInfo, setDataInfo] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  // ************* VIDEO data api ************
  const videoInfo = async () => {
    const data = await fetch(VIDEO_DATA_API + id);
    const json = await data.json();
    setDataInfo(json.items);
  };

  useEffect(() => {
    videoInfo();
  }, []);

  const VideoDataInfo = ({ data }) => {
    const { channelTitle, title, description, publishedAt } =
      data[0]?.snippet ?? {};
    const { likeCount, viewCount } = data[0]?.statistics ?? {};
    const formatedLikeCount =
      likeCount !== undefined ? formattedCount(likeCount) : "";
    const formatedViewCount =
      viewCount !== undefined ? formattedCount(viewCount) : "";
    const daysSincePublished =
      publishedAt !== undefined ? publicshedAgo(publishedAt) : "";

    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };

    return (
      <>
        <div className="mx-5 w-[1000px]">
          <h1 className="mt-0 font-bold text-xl break-all">{title}</h1>
          <div>
            <div className="p-2 flex">
              <img
                alt="channelLogo"
                src="https://www.svgrepo.com/show/350417/user-circle.svg"
                className="w-10 h-12 rounded-full"
              />
              <div className="px-3">
                <h1 className="font-bold">{channelTitle}</h1>
                <p className="">2M Subscribers</p>
              </div>
              <div className="flex justify-between font-bold items-center mt-2 ml-[30rem]">
                <div className="flex items-center">
                  <button className="bg-gray-200 rounded-full p-2 text-sm">
                    <i className="fa-regular fa-2x fa-thumbs-up mr-2"></i>
                    {formatedLikeCount}
                  </button>
                  <button className="bg-gray-200 rounded-full p-2 flex ml-4 justify-between">
                    <i className="fa-solid fa-share fa-2x mr-2"></i> share
                  </button>
                  <button
                    className="bg-gray-200 rounded-full p-2 ml-4 m-auto"
                    onClick={toggleDescription}
                  >
                    <i className="fa-solid fa-ellipsis mr-2 fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* description */}
          <div className="bg-gray-200 rounded-lg m-2 p-2 shadow-lg">
            <div className="flex ml-3 font-bold">
              <h1>{formatedViewCount} views</h1>
              <h1 className="ml-4">{daysSincePublished}</h1>
            </div>
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="m-2 text-xl"
            >
              {!showDescription ? "More..." : "Hide"}
            </button>

            {showDescription && (
              <div className="m-2">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <VideoDataInfo data={dataInfo} />
    </>
  );
};

export default VideoData;
