import React from "react";
import avaatar from "../Cards/images.png";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react"; // Import icons
import { Icon } from "@iconify/react";

const Comment = ({ content, id, name }) => {
  return (
    <div key={id} className="flex flex-col gap-2 w-full mt-4 shadow-md">
      <div className="flex items-start gap-3 w-full">
        <img src={avaatar} alt="avatar" className="h-10 w-10 rounded-full border-2 border-gray-500" />
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm w-full">
          <h1 className="font-semibold text-[14px] text-black">{name}</h1>
          <p className="text-[12px] text-gray-700">{content}</p>
        </div>
      </div>
      {/* Like, Share, Reply Actions */}
      <div className="flex items-center gap-8 text-sm ml-14 mt-1 mb-2">
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
          <ThumbsUp className="w-4 h-4" />
          Like
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
          <Share2 className="w-4 h-4" />
          Share
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
          <MessageCircle className="w-4 h-4" />
          Reply
        </button>
      </div>
    </div>
  );
};

export default Comment;
