import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpLanding from "../components/SignUp/SignUpLanding";
import SignUpProfile from "../components/SignUp/SignUpProfile";

const SignUp = () => {
  return (
    <Routes>
      <Route index element={<SignUpLanding />} />
      <Route path="profile" element={<SignUpProfile />} />
    </Routes>
  );
};

export default SignUp;
