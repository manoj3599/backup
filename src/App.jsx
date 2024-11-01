import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import HeaderArea from './Components/HeaderArea';
import Signup from './Login/Signup';
import axios from 'axios';
import Display from './Components/Display';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation(); // Get the current location

  // Check if the current path is '/Register', '/login', or '/Premium' (case-insensitive)
  const isAuthPage = 
    ["/register", "/login", "/premium"].includes(location.pathname.toLowerCase());

  // Axios interceptor to add project ID in headers
  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = 'f104bi07c490';
    return config;
  });

  return (
    <div>
      {/* Only render HeaderArea when not on the authentication pages */}
      {!isAuthPage && (
        <> 
          <HeaderArea />
          <Display/>
        </>
      )}

      {/* Routes for navigating between pages */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        {/* Add other routes like Premium if needed */}
      </Routes>
    </div>
  );
}

export default App;
