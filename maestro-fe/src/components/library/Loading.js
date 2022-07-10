import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

export default Loading;
