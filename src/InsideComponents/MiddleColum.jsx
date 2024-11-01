import React, { useState, useEffect } from "react";
import Middle from "./middle";
import axios from "axios";
import { assets } from "../assets/assets";
import { Icon } from "@iconify/react/dist/iconify.js";
import Comment from "../Functionalities/Comment"; 
import { UserProvider, useUser } from "../UserProvider";
import avatar from "../Cards/images.png";
import Popup from "../Functionalities/Popup";
import EditPost from "../Functionalities/EditPost";



const MiddleColum = () => {
  const [getList, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { commentPopup, getUser ,getName , openPopup ,isPopupOpen,closePopup, 
    editPost, getEditPost, SetEditPost, EditPopUp, SetEditPopUp } = useUser();

  // Fetch posts from API
  const PostSize = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/facebook/post?limit=5" // Fixed API URL
      );
      setList(response.data.data);
    } catch (error) {
      console.log("Error fetching the posts:", error);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    PostSize();
  }, []);

  const refreshPosts = () => {
    PostSize(); // Re-fetch all posts
  };

  // Handle body overflow when the modal is opened or closed
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [showModal]); // Update effect on showModal change

  return (
    <div className="flex flex-col items-center h-screen bg-gray-200 overflow-y-auto">
      {/* Flexbox layout for column */}
      <div className="flex flex-col px-4 bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-[38%] mt-3 rounded-xl shadow-md">
  <div className="flex items-center mt-4 mb-2 w-full">
    <img
      src={avatar}
      alt="xyz"
      className="w-14 h-14 rounded-full mr-4 bg-red-700"
    />
    <input
  type="text"
  placeholder={`What's in your mind ${getName.charAt(0).toUpperCase()+ getName.slice(1)}`}
  className="flex-grow bg-gray-300 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


  </div>

  <div className="border-b-2 border-gray-300 w-[90%] mx-auto mt-2"></div>

  <div className='flex justify-between pl-6 mb-2'>
                            <div className='flex cursor-pointer hover:bg-[#F0F2F5] dark:hover:bg-[#323436] rounded-lg mt-2 px-2 py-2'>
                            <Icon icon="wpf:video-call" width="1.8rem" height="1.6rem" style={{ color: '#E42645' }} className='ml-3' onClick={openPopup}/>

                                <h4 className='ml-1.5 text-gray-500 dark:text-gray-300 font-semibold'>Live Video</h4>
                            </div>
                            <div className='flex mt-2 cursor-pointer hover:bg-[#F0F2F5] dark:hover:bg-[#323436] rounded-lg px-2 py-2'>
                                <Icon icon="flat-color-icons:stack-of-photos" width="1.8rem" height="1.8rem"  onClick={closePopup}/>
                                <h4 className='ml-1 text-gray-500 dark:text-gray-300 font-semibold'>Photos/Video</h4>
                            </div>
                            <div className='flex mt-2 px-2 py-2 mr-3 cursor-pointer hover:bg-[#F0F2F5] dark:hover:bg-[#323436] rounded-lg'>
                                <Icon icon="tdesign:feel-at-ease" width="1.7rem" height="1.7rem" style={{ color: '#EAB129' }}   onClick={openPopup}/>
                                <h4 className='ml-1.5 text-base text-gray-500 dark:text-gray-300 font-semibold'>Feeling/activity</h4>
                            </div>
                        </div>

</div>


      {/* Render the posts */}
      {getList.map((obj, index) => (
        <div className="flex justify-center items-center md:w-[40%] px-4" key={index}>
          <Middle
            user={{ name: obj.author.name }}
            image={obj.images ? obj.images[0] : null}
            id={obj._id}
            likeCount={obj.likeCount}
            comments={obj.commentCount}
            shares={obj.shareCount}
            postText={obj.content}
            isLiked={obj.isLiked}
            time={obj.createdAt}
          />
        </div>
      ))}

      {commentPopup && (<Comment onClose={() => setShowModal(false)} />)}
        {isPopupOpen && (<Popup onClose={closePopup} refreshPosts={refreshPosts}/>)}
        {EditPopUp && (<EditPost/>)}
    </div>
  );
};

export default MiddleColum;
