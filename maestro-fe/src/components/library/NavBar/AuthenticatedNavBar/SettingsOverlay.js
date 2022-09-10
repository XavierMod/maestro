import React from "react";
import styled from "styled-components";
import Text from "../../../library/styles/Text";
import { BiLogIn } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../app/features/authenticationSlice";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.backgrounds.dark_2};
  padding: 15px;
  position: absolute;
  right: 0;
`;

const NavItem = styled.div`
  width: 140px;
`;

const SettingsOverlay = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <NavItem onClick={() => dispatch(logOut())}>
        <Text
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <BiLogIn style={{ marginRight: 10 }} fill="white" />
          Sign out
        </Text>
      </NavItem>
    </Wrapper>
  );
};

export default SettingsOverlay;
