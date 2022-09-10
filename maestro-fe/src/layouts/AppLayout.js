import React from "react";
import styled from "styled-components";
import NavBar from "../components/library/NavBar/NavBar";

const Wrapper = styled.div`
  margin: auto;
  max-width: 1700px;
`;

const LandingLayout = ({ children }) => (
  <Wrapper>
    <NavBar />
    {children}
  </Wrapper>
);

export default LandingLayout;
