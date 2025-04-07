import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ImageUpload } from "./pages/Home/ImageUpload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-upload" element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
