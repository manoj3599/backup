import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DisplayHome from './DisplayHome';

const Display = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<DisplayHome />} /> {/* Correct route setup */}
      </Routes>
    </div>
  );
};

export default Display;
