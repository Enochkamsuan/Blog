import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../../main";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
    </Routes>
  );
};

export default RoutePage;
