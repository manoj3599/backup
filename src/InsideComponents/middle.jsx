import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import No_Image from "../Cards/No_Image_Available.jpg";
import { useUser } from "../UserProvider";
import { Ellipsis } from "lucide-react";
import Profile from "../Cards/images_profile.png";
import Delete from "../Functionalities/Delete";

export default function Middle({
  user,
  image,
  likeCount,
  comments,
  shares,
  postText,
  isLiked,
  time,
  id
}) {
  const { getUser, openCommentPopup, setComment } = useUser();
  const [noOfLikes, setNoOfLikes] = useState(likeCount);
  const [Liked, setIsLiked] = useState(false);
  const [getDropdownn, setDropdownn] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const LikeHandler = async (postId) => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/facebook/post/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${getUser.token}`,
          },
        }
      );

      const { isLiked, likeCount } = response.data.data;

      if (isLiked) {
        await axios.delete(
          `https://academics.newtonschool.co/api/v1/facebook/like/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${getUser.token}`,
            },
          }
        );
        const updateLikeCount = likeCount - 1;
        setNoOfLikes(updateLikeCount);
        localStorage.removeItem(`Liked-${postId}`);
      } else {
        await axios.post(
          `https://academics.newtonschool.co/api/v1/facebook/like/${postId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${getUser.token}`,
            },
          }
        );
        const updateLikeCount = likeCount + 1;
        setNoOfLikes(updateLikeCount);
        localStorage.setItem(`Liked-${postId}`, "true");
      }
      setIsLiked(!Liked);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const likedState = localStorage.getItem(`Liked-${id}`);
    if (likedState === "true") {
      setIsLiked(true);
    }
  }, [id]);

  const userCommentPost = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/facebook/post/${id}/comments`
      );
      setComment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Card className="w-full mt-6 rounded-lg">
        <CardBody className="p-0">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 p-4 relative"
          >
            <div className="mb-2 flex items-center">
              <img
                src={Profile}
                alt="User avatar"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div
                onClick={() => setDropdownn(!getDropdownn)}
                className="absolute w-[40px] h-[40px] flex items-center justify-center right-4 top-7 hover:bg-gray-500 hover:rounded-full cursor-pointer"
              >
                <Ellipsis />
                {getDropdownn && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 top-10 z-10"
                  >
                    <Delete id={id}/>
                  </div>
                )}
              </div>

              <div>
                <h1 className="font-bold">{user.name}</h1>
                <h5 className="text-black font-normal text-xs">{time}</h5>
              </div>
            </div>
          </Typography>

          {/* Post Image */}
          <div className="w-full flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt="Post visual"
                className="w-[95%] h-auto object-cover"
              />
            ) : (
              <div className="w-[40%] h-full bg-gray-300 flex items-center justify-center">
                <img src={No_Image} alt="" />
              </div>
            )}
          </div>

          {/* Post Text */}
          <Typography className="p-4">{postText}</Typography>
          <Typography className="text-sm text-gray-500 mt-2 p-4">
            Likes: {noOfLikes} | Comments: {comments} | Shares: {shares}
          </Typography>
          <div className="border-b-2 border-gray-300 w-[90%] mx-auto mt-2"></div>
        </CardBody>

        {/* Footer with Like, Share, Comment Buttons */}
        <CardFooter className="pt-0 p-2 flex justify-between items-center">
          <div className="flex justify-between w-full space-x-4">
            <div
              onClick={() => LikeHandler(id)}
              className="pl-6 text-gray-500 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 rounded-md p-2"
            >
              <Icon
                icon="bx:like"
                className={`mr-1 text-3xl ${
                  Liked ? "text-blue-500" : "text-gray-500"
                }`}
              />
              <h1
                className={`mr-1 text-2xl ${
                  Liked ? "text-blue-500" : "text-gray-500"
                }`}
              >
                Like
              </h1>
            </div>
            <div className="pr-6 text-gray-500 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 rounded-md p-2">
              <Icon icon="bx:share" className="mr-1 text-2xl" />
              <h1 className="mr-1 text-2xl">Share</h1>
            </div>
            <div
              onClick={() => {
                openCommentPopup(id);
                userCommentPost();
              }}
              className="pr-6 text-gray-500 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-700 rounded-md p-2"
            >
              <Icon icon="ei:comment" className="mr-1 text-2xl" />
              <h1 className="mr-1 text-2xl">Comment</h1>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}