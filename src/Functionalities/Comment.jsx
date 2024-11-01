import React, { useState, useEffect } from "react";
import { X, ThumbsUp, MessageCircle } from "lucide-react";
import CommentCard from "./CommentCard";
import { useUser } from "../UserProvider";
import axios from "axios";
import avatar from '../Cards/download.jpeg';
import avaatar from "../Cards/images.png";
import { Icon } from "@iconify/react";
import No_Image from "../Cards/No_Image_Available.jpg";

const Comment = () => {
  const { closeCommentPopup, singleId, getcomment, setComment, getUser } = useUser();
  const [commentData, setCommentData] = useState(null);
  const [content, setCreateComment] = useState(""); // Initialize as an empty string

  const CommentPost = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/facebook/post/${singleId}`
      );
      setCommentData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (singleId) {
      CommentPost();
    }
  }, [singleId]);

  const writeComment = async (event) => {
    event.preventDefault();
    const getComment = { content };

    try {
      const response = await axios.post(
        `https://academics.newtonschool.co/api/v1/facebook/comment/${singleId}`,
        getComment,
        {
          headers: {
            Authorization: `Bearer ${getUser.token}`,
          },
        }
      );

      userCommentPost(); // Fetch updated comments after posting
      setCreateComment(""); // Clear the input field
      console.log(response.data.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  const userCommentPost = async () => {
    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/facebook/post/${singleId}/comments`);
      console.log(response.data.data);
      setComment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!commentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center">
      <div className="mt-0 flex flex-col gap-5 text-white mt-20">
        {/* Close button */}
        <button onClick={closeCommentPopup} className="place-self-end">
          <X size={40} className="text-black" />
        </button>

        {/* Comment Box */}
        <div className="bg-white rounded-xl px-5 py-5 flex flex-col gap-4 items-center mx-4 w-[90vw] max-w-[60rem] h-auto overflow-y-auto shadow-lg">
          <div className="text-black text-[24px] font-bold leading-[60px] text-center w-full">
            <h1>{`${commentData.author.name}'s Post`}</h1>
          </div>

          {/* Divider */}
          <div className="border-b-2 border-gray-300 w-full mx-auto"></div>

          {/* Post Content */}
          <div className="flex flex-row items-center place-self-start w-full mt-4">
            <img
              src={avaatar}
              alt="Post image"
              className="w-12 h-12 rounded-full mr-3 border-2 border-gray-500"
            />
            <div>
              <h1 className="font-bold text-black text-[16px]">{commentData.author.name}</h1>
              <p className="text-gray-500 text-[12px]">2 hours ago</p>
            </div>
          </div>

          <div className="text-black text-[14px] break-words mt-4 w-full">
            {commentData.content}
          </div>

          {/* Post image */}
          {/* Post image */}
{commentData.images && commentData.images.length > 0 ? (
  <img
    src={commentData.images[0]} // Assuming you want to show the first image in the array
    alt="Post visual"
    className="w-full h-auto object-cover rounded-lg mt-4"
  />
) : (
  <img
    src={No_Image}
    alt="Post visual"
    className="w-full h-auto object-cover rounded-lg mt-4"
  />
)}


          {/* Like and Comment Counts */}
          <div className="flex justify-between gap-4 w-full mt-4">
            <p className="flex flex-row items-center gap-2 text-black text-[14px]">
              <ThumbsUp className="text-blue-500 w-5 h-5" />
              {commentData.likeCount}
            </p>
            <p className="flex flex-row items-center gap-2 text-black text-[14px]">
              {commentData.commentCount} comments
              <MessageCircle className="text-blue-500 w-5 h-5" />
            </p>
          </div>

          {/* Divider */}
          <div className="border-b-2 w-full mx-auto mt-2"></div>

          {/* Comment Section */}
          <div className="w-[95%]">
            {getcomment.map((obj) => (
              <div key={obj.id} className="pb-1">
                <CommentCard
                  content={obj.content}
                  id={obj._id}
                  name={obj.author_details.name}
                />
              </div>
            ))}
          </div>

          {/* Facebook-like Comment Input Box */}
          <div className="flex items-center mt-4 w-full shadow-md p-2 rounded-2xl bg-gray-100">
            <img
              src={avatar}
              className="h-10 w-10 rounded-full"
              alt="avatar"
            />
            <input
              className="flex-grow bg-white ml-4 p-2 rounded-2xl border-none focus:outline-none text-sm text-gray-800"
              placeholder="Write a comment..."
              value={content} // Controlled input
              onChange={(event) => setCreateComment(event.target.value)} // Update state on change
            />
            <div className="flex items-center justify-center p-2 cursor-pointer">
              <Icon
                icon="iconamoon:send-fill"
                width="1.5rem"
                height="1.5rem"
                style={{ color: "#005DC7" }}
                onClick={writeComment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
