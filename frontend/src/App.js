import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import Food from "./components/Food";
import Chat from "./components/Chat";
import LiveCam from "./components/LiveCam";  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/food" element={<Food />} />
        <Route path="/ai-manager" element={<Chat />} />
        <Route path="/live-cam" element={<LiveCam />} />  
      </Routes>
    </Router>
  );
};

export default App;
