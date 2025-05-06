import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../../main";
import AccountPage from "../../main/profile";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/profile" element={<AccountPage />}></Route>
    </Routes>
  );
};

export default RoutePage;
