import React from "react";
import styled from "styled-components";
import NavBar from "../components/library/NavBar/NavBar";

const Wrapper = styled.div`
  margin: auto;
  max-width: 1100px;
  margin-top: 10px;
`;

const ContainedLayout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default ContainedLayout;
