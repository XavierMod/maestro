import React from "react";
import styled from "styled-components";
import SongPart from "./SongPart";

const Wrapper = styled.div`
  display: flex;
`;

const SongStructure = (props) => {
  return (
    <Wrapper>
      {props.songParts.map((songPart, ind) => {
        return <SongPart key={songPart.id} {...songPart} song={props} />;
      })}
    </Wrapper>
  );
};

export default SongStructure;
