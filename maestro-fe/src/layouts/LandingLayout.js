import React from "react";
import styled from "styled-components";
import NavBar from "../components/library/NavBar";

const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  margin-top: 10px;
`;

const LandingLayout = ({ children }) => (
  <Wrapper>
    <NavBar />
    {children}
  </Wrapper>
);

export default LandingLayout;
