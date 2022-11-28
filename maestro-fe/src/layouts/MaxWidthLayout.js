import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  max-width: 1400px;
  margin-top: 10px;
`;

const ContainedLayout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default ContainedLayout;