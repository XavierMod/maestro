import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: auto;
    max-width: 1200px;
    padding: 0 20px;
`;

const StandardLayout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default StandardLayout;
