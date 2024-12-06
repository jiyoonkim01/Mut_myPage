import styled from "@emotion/styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Favorite from "./pages/Favorite";
import Comment from "./pages/Comment";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
