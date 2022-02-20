import React from "react";
import { Route, Routes } from "react-router-dom";
import Allbeers from "./Page/Allbeers";
import { Bierdetail } from "./Page/Bierdetail";
import Home from "./Page/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allbeers" element={<Allbeers />} />
      <Route path="/bierdetail" element={<Bierdetail />} />
    </Routes>
  );
};

export default App;
