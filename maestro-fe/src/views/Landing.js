import React from "react";
import { Link } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";

const Landing = () => {
  return (
    <LandingLayout>
      <div style={{color: 'white'}}>Landing content</div>
      <img src="http://localhost:3000/388184673b1048fdd7abf2b04e868823" />
    </LandingLayout>
  );
};

export default Landing;
