import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>Landing content</div>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Landing;
