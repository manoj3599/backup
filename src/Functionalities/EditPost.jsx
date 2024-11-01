import React, { useState, useEffect } from "react";
import { X, ThumbsUp, MessageCircle } from "lucide-react";
import CommentCard from "./CommentCard";
import { useUser } from "../UserProvider";
import axios from "axios";
import avatar from "../Cards/download.jpeg";
import avaatar from "../Cards/images.png";
import { Icon } from "@iconify/react";
import No_Image from "../Cards/No_Image_Available.jpg";

const EditPost = () => {
  const {
    closeCommentPopup,
    singleId,
    getcomment,
    setComment,
    getUser,
    editPost,
    getEditPost,
    SetEditPost,
    EditPopUp,
    SetEditPopUp,
    editPostClose,
  } = useUser();
  const [commentData, setCommentData] = useState(null);
  const [content, setCreateComment] = useState(""); // Initialize as an empty string

  const CommentPost = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/facebook/post/${getEditPost}`
      );
      setCommentData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (getEditPost) {
      CommentPost();
    }
  }, [getEditPost]);

  if (!commentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center shadow-2xl border border-black">
      <div className="mt-0 flex flex-col gap-5 text-white mt-20">
        {/* Close button */}
        <button onClick={editPostClose} className="place-self-end">
          <X size={30} className="text-black" />
        </button>

        {/* Comment Box */}
        <div className="bg-white rounded-lg px-4 py-4 flex flex-col gap-4 items-center mx-4 w-[80vw] max-w-[40rem] h-auto overflow-y-auto shadow-lg border border-black">
          <div className="text-black text-[22px] font-bold leading-[50px] text-center w-full">
            <h1>{`${commentData.author.name}'s Post`}</h1>
          </div>

          {/* Divider */}
          <div className="border-b-2 border-gray-300 w-full mx-auto"></div>

          {/* Post Content */}
          <div className="flex flex-row items-center place-self-start w-full mt-4">
            <img
              src={avaatar}
              alt="Post image"
              className="w-10 h-10 rounded-full mr-3 border-2 border-gray-500"
            />
            <div>
              <h1 className="font-bold text-black text-[15px]">
                {commentData.author.name}
              </h1>
              <p className="text-gray-500 text-[11px]">2 hours ago</p>
            </div>
          </div>

          <div className="text-black text-[13px] break-words mt-3 w-full">
            {commentData.content}
          </div>

          {/* Post image */}
          {commentData.images && commentData.images.length > 0 ? (
            <img
              src={commentData.images[0]} // Assuming you want to show the first image in the array
              alt="Post visual"
              className="w-full h-auto object-cover rounded-lg mt-3"
            />
          ) : (
            <img
              src={No_Image}
              alt="Post visual"
              className="w-full h-auto object-cover rounded-lg mt-3"
            />
          )}

          {/* Like and Comment Counts */}
          <div className="flex justify-between gap-3 w-full mt-3">
            <p className="flex flex-row items-center gap-1 text-black text-[13px]">
              <ThumbsUp className="text-blue-500 w-4 h-4" />
              {commentData.likeCount}
            </p>
            <p className="flex flex-row items-center gap-1 text-black text-[13px]">
              {commentData.commentCount} comments
              <MessageCircle className="text-blue-500 w-4 h-4" />
            </p>
          </div>

          {/* Divider */}
          <div className="border-b-2 w-full mx-auto mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
