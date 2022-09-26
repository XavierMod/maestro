import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import styled from "styled-components";
import Title from "../../library/styles/Title";
import ProfilePic from "../../library/ProfilePic";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.primary.accent};
  height: 100%;
  padding-top: 1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  padding-top: 10px;
  margin-right: 10px;
`;

const AddPartWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary.accent_3};
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin: auto;
  cursor: pointer;
`;

const SongPart = (props) => {
  if (props.song.trackRequests.find((trackRequest) => trackRequest.songPart.id === props.id)) {
    return (
      <div style={{ textAlign: "center", overflow: 'hidden', marginRight: '10px' }}>
        <div style={{marginBottom: 10}}>
        <ProfilePic />
        </div>
        <div style={{background: '#30303A', height: '100%'}}>
          <Title
            style={{
              fontSize: "13px",
              letterSpacing: -0.2,
              lineHeight: 1,
              maxWidth: "50%",
              margin: "auto",
              padding: "10px 0",
            }}
            className="large"
          >
            {props.name}
          </Title>
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <p>{JSON.stringify(props)}</p>
      <AddPartWrapper>
        <BiPlusMedical style={{ fill: "white" }} />
      </AddPartWrapper>
      <Title
        style={{
          fontSize: "13px",
          letterSpacing: -0.2,
          lineHeight: 1,
          maxWidth: "50%",
          margin: "auto",
          padding: "10px 0",
        }}
        className="large"
      >
        Rythm guitar
      </Title>
    </Wrapper>
  );
};

export default SongPart;
