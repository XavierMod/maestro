import React from "react";
import Default from "./Default";
import AuthenticatedNavBar from "./AuthenticatedNavBar/AuthenticatedNavBar";
import { useSelector } from "react-redux";

const NavBar = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isUserAuthenticated
  );
  return (
    <div>{isUserAuthenticated ? <AuthenticatedNavBar /> : <Default />}</div>
  );
};

export default NavBar;
