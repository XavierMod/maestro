import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Text from "../library/styles/Text";

const Wrapper = styled.div`
  display: flex;
`;

const ExploreNavBar = () => {
  return (
    <Wrapper>
      <div style={{ display: "flex", flex: 1 }}>
        <NavLink
          style={({ isActive }) => ({
            opacity: isActive ? 1 : 0.3,
          })}
          to="/explore"
          end
        >
          <Text className="gorod">SONGS</Text>
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            opacity: isActive ? 1 : 0.3,
          })}
          to="musicians"
        >
          <Text className="gorod">MUSICIANS</Text>
        </NavLink>
      </div>
      <NavLink
        style={({ isActive }) => ({
          opacity: isActive ? 1 : 0.3,
        })}
        to="saved"
      >
        <Text className="gorod">SAVED</Text>
      </NavLink>
    </Wrapper>
  );
};

export default ExploreNavBar;
