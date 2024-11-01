import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../UserProvider';

const Login = () => {
  
  const{getUser,signInUser,onNameHandler} = useUser();
  const [getData, setData] = useState({
    email: "",
    password: "",
    appType: "facebook"
  });
  const [getError, setError] = useState("");
  const navigate = useNavigate(); // Define navigate here

  const onChangeHandler = (event) => {
    setData({ ...getData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError("");

    axios.post("https://academics.newtonschool.co/api/v1/user/login", getData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        signInUser({
          name: response.data.data.user.name,
          status: response.data.status,
          token: response.data.token
        });
        onNameHandler(response.data.data.user.name);
        navigate("/"); // Redirect to home after login
      })
      .catch((error) => {
        console.error(error);
        setError("Login failed. Please check your credentials.");
      });
      console.log(getUser)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-evenly items-center w-full max-w-4xl p-4 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-blue-600 font-bold text-7xl mb-2">facebook</h1>
          <p className="text-xl font-medium text-black">
            Facebook helps you connect and share
            <br />
            with the people in your life.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
          <form onSubmit={onSubmitHandler}>
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChangeHandler}
                value={getData.email}
                placeholder="Email address or phone number"
                className="w-full p-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                name="password"
                id="password"
                value={getData.password}
                onChange={onChangeHandler}
                placeholder="Password"
                className="w-full p-4 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Log In
              </button>
            </div>
          </form>

          {getError && <div className="text-red-600 text-sm mt-4">{getError}</div>}

          <div className="text-center my-4">
            <a href="forgot" className="text-blue-600 text-sm hover:underline">
              Forgotten password?
            </a>
          </div>
<Link to="/register">
 <button className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition duration-300">
            Create New Account
          </button>
</Link>
         

          <div className="text-center mt-6 text-sm">
            <a href="createpage" className="text-black">
              <b>Create a Page</b>
            </a>{' '}
            for a celebrity, brand, or business.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
