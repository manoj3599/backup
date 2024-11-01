// Delete.jsx
import React from 'react';
import axios from 'axios';
import { UserProvider, useUser } from '../UserProvider';

function Delete({id}) {
  const {getUser,editPost}= useUser();

  const postDelete = async (idd) => {
    try {
        const result = await axios.delete(`https://academics.newtonschool.co/api/v1/facebook/post/${idd}`, {
            headers: {
                Authorization: `Bearer ${getUser.token}`
            }
        });

        window.location.reload();
        console.log(result);

    } catch (err) {
        alert(err.message);
    }
};

  return (
    <div className="relative mt-3 p-2 bg-gray-500 shadow-lg rounded-md w-40">
      {/* Upward-facing arrow on the right side */}
      <div className="absolute -top-2 right-[8%] w-4 h-4 bg-gray-500 rotate-45  border-none"></div>
<div className='mt-2'>
    <button onClick={()=>postDelete(id)} className="w-full text-white text-left px-4 py-2 hover:bg-gray-200  hover:text-black rounded">Delete Post</button>
      <button onClick={()=>editPost(id)} className="w-full text-white text-left px-4 py-2 hover:bg-gray-200 hover:text-black rounded">Edit Post</button>

</div>
      
    </div>
  );
}

export default Delete;

