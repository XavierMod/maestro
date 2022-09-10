import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../../../assets/svg/simple-logo.svg";
import ProfilePic from "../../../library/ProfilePic";
import NavItem from "./NavItem";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import SettingsOverlay from "./SettingsOverlay";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const LogoWrapper = styled.img`
  margin: 10px;
  padding-bottom: 5px;
`;

const NavItems = styled.div`
  flex: 1;
  display: flex;
`;

const SettingsOverlayWrapper = styled.div`
  position: relative;
  background: ${(props) =>
    props.open ? props.theme.colors.backgrounds.dark_2 : "transparent"};
  margin-left: 10px;

  &:hover {
    background: ${(props) => props.theme.colors.backgrounds.dark_2};
    transition: all ease 0.3s;
  }
`;

const Right = styled.div``;

const NavBar = () => {
  const [showSettingsOverlay, setShowSettingsOverlay] = useState(false);
  return (
    <Wrapper>
      <NavLink to="/">
        <LogoWrapper alt="" style={{ width: "70px" }} src={Logo} />
      </NavLink>
      <NavItems>
        <div style={{ flex: 1 }}>
          <NavItem text="Explore" link="/home" />
        </div>
        <Right>
          <NavItem text="My tracks" link="/tracks" />
          <NavItem text="My songs" link="/songs" />
        </Right>
      </NavItems>
      <div
        onClick={() => setShowSettingsOverlay(!showSettingsOverlay)}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <ProfilePic />
        <SettingsOverlayWrapper open={showSettingsOverlay}>
          <BiDotsHorizontalRounded style={{ margin: "20px" }} fill="white" />
          {showSettingsOverlay ? <SettingsOverlay /> : null}
        </SettingsOverlayWrapper>
      </div>
    </Wrapper>
  );
};

export default NavBar;
