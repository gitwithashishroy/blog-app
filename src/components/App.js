import React from "react";
import { Routes, Route  } from "react-router-dom";
import { Blog , Home , CreatePost , Post } from '../pages' ; 
import Navbar from "./Navbar";

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/your-post" element={<Post />} />
        <Route path="/blog/:id" element={<Blog />} /> 
      </Routes>
    </div>
  );
};

export default App;
