import React from "react";
import styled from "styled-components";
import Title from "../library/styles/Title";
import PlayAndInfo from "./PlayAndInfo";
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
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 20px;
  padding-bottom: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

const SongBlock = (props) => {
  return (
    <Wrapper>
      <div style={{marginBottom: 15}}>
      <PlayAndInfo isPlaying={false} name={props.name} />
      </div>
      <SongStructure {...props} />
      <SongActions {...props} />
    </Wrapper>
  );
};

export default SongBlock;
