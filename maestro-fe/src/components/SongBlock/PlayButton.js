import React from "react";
import styled from "styled-components";
import { BiPlay } from "react-icons/bi";

const Wrapper = styled.div`
    background: white;
    display: inline-flex;
    width: 50px;
    height: 50px;
    align-items: center;
    border-radius: 500px;
    justify-content: center;
    cursor: pointer;
`;

const PlayButton = () => {
  return (
    <Wrapper>
      <BiPlay size={40} />
    </Wrapper>
  );
};

export default PlayButton;
