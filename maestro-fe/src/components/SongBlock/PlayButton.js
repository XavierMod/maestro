import React from "react";
import styled, { useTheme } from "styled-components";
import { BiPause, BiPlay } from "react-icons/bi";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  background: white;
  display: inline-flex;
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 500px;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;

  &:active {
    transform: scale(0.8);
    transition: all ease 0.3s;
  }

  &.isPlaying {
    border: 3px solid white;
    background: ${props => props.theme.colors.backgrounds.dark};

    svg {
      fill: white;
    }
  }
`;

const PlayButton = (props) => {
  const theme = useTheme();

  return (
    <Wrapper
      className={props.isPlaying ? "isPlaying" : null}
      onClick={() => props.onPress(!props.isPlaying)}
    >
      {!props.isPlaying ? (
        <BiPlay fill={theme.colors.backgrounds.dark} size={40} />
      ) : (
        <BiPause fill={theme.colors.backgrounds.dark} size={40} />
      )}
    </Wrapper>
  );
};

export default PlayButton;
