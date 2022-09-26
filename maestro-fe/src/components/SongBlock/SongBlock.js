import React from "react";
import styled from "styled-components";
import Title from "../library/styles/Title";
import PlayButton from "./PlayButton";
import SongActions from "./SongActions/SongActions";
import SongInfo from "./SongInfo";
import SongStructure from "./SongStructure/SongStructure";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.backgrounds.dark_2};
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  padding: 10px;
  padding-bottom: 0;
  border-radius: 18px;
  margin-bottom: 15px;
`;

const SongBlock = (props) => {
  return (
    <Wrapper>
      <PlayButton {...props} />
      <SongInfo {...props} />
      <SongStructure {...props} />
      <SongActions {...props} />
    </Wrapper>
  );
};

export default SongBlock;
