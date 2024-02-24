import React, { useEffect, useState } from "react";
import { VIDEO_COMMENTS } from "../utils/constants";

const CommentContainer = ({ id }) => {
  const [commentData, setCommentData] = useState([]);

  // *********** comment api
  const commentAPI = async () => {
    const data = await fetch(VIDEO_COMMENTS + id);
    const json = await data.json();
    //console.log(json.items);
    setCommentData(json.items);
  };
  useEffect(() => {
    commentAPI();
  }, []);
  //******************

  // *********** Comment Structue
  const Comment = ({ data }) => {
    //console.log(data)
    const { authorDisplayName, authorProfileImageUrl, textDisplay } =
      data?.snippet?.topLevelComment?.snippet;


    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 w-[900px] ">
        <img
          className="w-12 h-12 rounded-full"
          alt="user"
          src={authorProfileImageUrl}
        />
        <div className="px-3">
          <p className="font-bold">{authorDisplayName}</p>
          <p className="break-all">{textDisplay.substring(1,200)}...</p>
        </div>
      </div>
    );
  };

  // ********** multiple comments
  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => {
      return <Comment key={index} data={comment} />;
    });
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
