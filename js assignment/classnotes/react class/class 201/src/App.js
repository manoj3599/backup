import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ab from './Ab'; // Correct import statement for About component
import Contact from './contact'; // Correct import statement for Contact component

function App() {
  return (
    <div className="App">
      <header>
        {header} {/* This will display the header */}
      </header>
      <Ab firstname="MaNOJ" myCity="Hubli" />
      <Ab firstname="VIKRANTH" myCity="bANGLORE" />
      <Ab firstname="MAHESH" myCity="DAVANGERE" />
      <Contact designation="manager" company="OpenAI" /> {/* Added the company prop */}
    </div>
  );
}

const header = <h1>MANOJ</h1>;

export default App;
