import React, { useState } from 'react';
import xyz from '../Cards/images.png';
import { X } from "lucide-react";
import { useUser } from '../UserProvider';
import { Icon } from '@iconify/react';
import axios from 'axios';

const Popup = ({ onClose, refreshPosts }) => {
  const { getName, getUser } = useUser();
  const [getFile, setFile] = useState(null);
  const [getNameValue, setNameValue] = useState("");

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameUpload = (event) => {
    setNameValue(event.target.value);
  };

  const postDetails = async () => {
    let formData = new FormData();
    formData.append('title', `${getName}`);
    formData.append('content', getNameValue);
    formData.append('images', getFile);

    try {
      const result = await axios.post('https://academics.newtonschool.co/api/v1/facebook/post/', formData, {
        headers: {
          Authorization: `Bearer ${getUser.token}`,
        },
      });

      if (result.status === 201) {
        refreshPosts();
        onClose();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="w-[100%] h-[100%] fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[40%] h-[60%] flex flex-col gap-1 text-white bg-white p-4 rounded-lg relative">
        <div className="relative w-full h-[10%]">
          <h1 className="text-black font-bold text-center text-2xl mt-2">Create Post</h1>
          <button className="absolute right-0 top-0 p-2 bg-gray-500 rounded-[50%]" onClick={onClose}>
            <X size={25} className="text-black" />
          </button>
        </div>
        <div className="border-b-[3px] border-x-gray-600 w-[100%] mx-auto mt-2"></div>

        <div className="w-full h-[20%] relative rounded-xl flex flex-row items-start">
          <img src={xyz} alt="" className="rounded-xl w-20 h-20 absolute top-0 left-0 bg-gray-600" />
          <h1 className="text-gray-500 ml-24 mt-6 text-2xl font-extrabold">
            {getName.charAt(0).toUpperCase() + getName.slice(1)}
          </h1>
        </div>

        <div className="w-full h-[40%] relative flex flex-col">
          <input
            type="text"
            className="text-black text-3xl absolute top-0 left-0 w-full h-[20%] placeholder:text-left placeholder:pl-0 placeholder:text-3xl outline-none"
            placeholder="What's going on"
            onChange={handleNameUpload}
          />

          <div className="border-black">
            <label className="text-white absolute left-0 bottom-0 bg-gray-600 w-[40%] h-[30px] rounded-lg flex items-center justify-center cursor-pointer">
              Add Photos/Videos
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*"
              />
            </label>

            {/* Display file name below the label if a file is selected */}
            {getFile && (
              <p className="text-gray-950 bold mt-1 absolute left-[42%] bottom-1">{getFile.name}</p>
            )}

            <div className="flex gap-4 absolute right-1 bottom-0">
              <Icon icon="flat-color-icons:stack-of-photos" width="2.5rem" height="2.5rem" className="cursor-pointer hover:scale-110" />
              <Icon icon="tdesign:feel-at-ease" width="2.5rem" height="2.5rem" style={{ color: '#EAB129' }} className="cursor-pointer hover:scale-110" />
              <Icon icon="heroicons:gif-20-solid" width="2.5rem" height="2.5rem" style={{ color: '#28B19E' }} className="cursor-pointer hover:scale-110" />
            </div>
          </div>
        </div>

        <div className="border-b-[3px] border-x-gray-600 w-[100%] mx-auto mt-[2.0rem]"></div>
        <div className="w-100 h-[20%] flex items-center justify-center">
          <button className="bg-blue-700 w-[80%] h-[60%] text-white rounded-2xl text-2xl" onClick={postDetails}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
