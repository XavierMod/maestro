import React from "react";
import styled from "styled-components";
import ProfilePic from "../../library/ProfilePic";
import Like from "./Like";
import Save from "./Save";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const SongActions = () => {
  return (
    <Wrapper>
      <div style={{display: 'flex', alignItems: 'center'}}> 
        <ProfilePic />
        <div style={{ border: "1px solid white", height: 10, margin: 15 }} />
        <Like />
        <Save />
      </div>
    </Wrapper>
  );
};

export default SongActions;
