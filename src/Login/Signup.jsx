import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "../UserProvider";

const Signup = () => {
  const navigate = useNavigate();

  const {settingName} = useUser()

  const [getData, setData] = useState({
    email: "",
    name: "",
    password: "",
    appType: "facebook",
  });

  const [error, setError] = useState(""); // State for handling errors

  const onChangeHandler = (event) => {
    setData({ ...getData, [event.target.name]: event.target.value });
  };

  

  const onSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://academics.newtonschool.co/api/v1/user/signup", getData)
      .then((response) => {
        console.log(response);
        settingName(getData.name);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("unknown error, try after some time");
        }
      });
  };

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenSmall(window.innerWidth < 1100);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isScreenSmall ? (
        <div className="bg-gray-100 flex flex-col items-center h-screen">
          <div className="mt-[5%] flex flex-col justify-center items-center">
            <h1 className="text-blue-600 font-bold text-7xl mb-2">facebook</h1>
            <div className="bg-white border-4 border-grey-500 rounded-lg p-6 w-[30rem]">
              <div className="flex flex-col items-center pb-2">
                <h1 className="font-bold text-3xl">Create a new account</h1>
                <p className="text-xl">It's quick and easy.</p>
                <div className="border-b-2 border-gray-300 w-3/4 mx-auto mt-2"></div>
              </div>

              <form onSubmit={onSubmitHandler}>
                <div className="flex flex-col items-center">
                  <input
                    className="w-full p-4 border border-gray-300 rounded-md mb-2"
                    type="text"
                    name="name"
                    id="name"
                    value={getData.name}
                    onChange={onChangeHandler}
                    placeholder="Enter Your Name"
                  />
                  <input
                    className="w-full p-4 border border-gray-300 rounded-md mb-2"
                    type="email"
                    name="email"
                    id="email"
                    value={getData.email}
                    onChange={onChangeHandler}
                    placeholder="Enter Your Email"
                  />
                  <input
                    className="w-full p-4 border border-gray-300 rounded-md mb-2"
                    type="password"
                    name="password"
                    id="password"
                    value={getData.password}
                    onChange={onChangeHandler}
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="mt-5 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-1/2 bg-green-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    SignUp
                  </button>
                </div>

                <div className="flex flex-col items-center mt-4">
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Already Have AN ACCOUNT
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 flex flex-col items-center h-screen">
          <div className="mt-[5%] flex flex-col justify-center items-center">
            <h1 className="text-blue-600 font-bold text-5xl sm:text-6xl lg:text-7xl mb-2">
              facebook
            </h1>

            <div className="bg-white border-4 border-grey-500 rounded-lg p-6 w-full max-w-[30rem]">
              <div className="flex flex-col items-center pb-2">
                <h1 className="font-bold text-2xl sm:text-3xl">
                  Create a new account
                </h1>
                <p className="text-lg sm:text-xl">It's quick and easy.</p>
                <div className="border-b-2 border-gray-300 w-3/4 mx-auto mt-2"></div>
              </div>

              <form onSubmit={onSubmitHandler}>
                <div className="flex flex-col items-center">
                  <input
                    className="w-full p-4 border border-gray-300 rounded-md mb-2"
                    type="text"
                    name="name"
                    id="name"
                    value={getData.name}
                    onChange={onChangeHandler}
                    placeholder="Enter Your Name"
                    
                  />
                  <input
                    className="w-full p-4 border border-gray-300 rounded-md mb-2"
                    type="email"
                    name="email"
                    id="email"
                    value={getData.email}
                    onChange={onChangeHandler}
                    placeholder="Enter Your Email"
                  />
                  <input
                    className="w-full p-4 border border-gray-300 rounded-md mb-2"
                    type="password"
                    name="password"
                    id="password"
                    value={getData.password}
                    onChange={onChangeHandler}
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="mt-5 flex flex-col items-center">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 bg-green-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    SignUp
                  </button>
                </div>

                <div className="flex flex-col items-center mt-4">
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Already Have AN ACCOUNT
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
