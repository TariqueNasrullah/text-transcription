import React from "react";
import { Route, Routes } from "react-router";
import VideoPlayer from "./components/Video";
import Home from "./page/Home";
import Recorder from "./page/Recorder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<Recorder />} />
        <Route path="/modal" element={<VideoPlayer />} />
      </Routes>
    </>
  );
}

export default App;
