import { createContext, useContext, useState } from "react";

const UserContext = createContext()
import React from 'react'
export const UserProvider = ({children}) => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [commentPopup, setCommentPopup] = useState(false);
  const [singleId, setSingleId] = useState(0);
  const [getcomment, setComment] = useState([]);
  const [getName, setName] = useState(sessionStorage.getItem('name') || "User");
  const[getEditPost, SetEditPost]= useState(0)
  const[EditPopUp, SetEditPopUp]= useState(false)

const [getUser, setUser] = useState(
    localStorage.getItem("token")
      ? { token: localStorage.getItem("token"), status: "success" }
      : null
  );

  const signOutUser = () => {
    setUser(null); // Clear user data
   
  };

    const signInUser = (input)=>{
        setUser(input)
      }

      const openCommentPopup = (id) =>{
        setCommentPopup(true)  
        setSingleId(id)         
        };

        const closeCommentPopup = () =>{
          setCommentPopup(false);
          }

         

            const openPopup = () =>{
              setPopupOpen(true) 
              console.log("hello")          
           };
       const closePopup = () =>{
           setPopupOpen(false);
           }

           const onNameHandler = (data)=>{
            setName(data);
            sessionStorage.setItem('name', data);
        }

        const editPost =(id)=>{
SetEditPost(id)
SetEditPopUp(true)
        }

        const editPostClose =()=>{
          
          SetEditPopUp(false)
                  }

  
      
 const object = {
    getUser,
    signInUser,
    signOutUser,
    openCommentPopup,
    closeCommentPopup,
    commentPopup,
    setCommentPopup,
    singleId, 
    setSingleId,
   
    getcomment, setComment,
    getName, setName,
    openPopup,
    closePopup,
    isPopupOpen, 
    setPopupOpen,
    onNameHandler,
    editPost,
    getEditPost,
     SetEditPost,
     EditPopUp, 
     SetEditPopUp,
     editPostClose

  }

  

  return (
    <div>
    
    <UserContext.Provider value={object}>
      {children}
      </UserContext.Provider>
      </div>
  )
}

export  function useUser(){
    return useContext(UserContext);
  }