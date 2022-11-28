import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import styled from "styled-components";
import Title from "../../library/styles/Title";
import ProfilePic from "../../library/ProfilePic";
import Tooltip from "@mui/material/Tooltip";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.primary.accent};
  height: 100%;
  padding-top: 1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  padding-top: 10px;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddPartWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary.accent_3};
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40px;
  width: 40px;
  margin: auto;
  cursor: pointer;
`;

const TotalRequests = styled.div`
  font-size: 13px;
  color: black;
  background: white;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SongPart = (props) => {
  // TODO sort out this if statement so it returns an actual match
  const matchById = props.song.trackRequests.filter(
    (trackRequest) =>
      trackRequest.songPart.id === props.id);
  if (matchById[0] && matchById[0].isChosen) {
    return (
      <div
        style={{ textAlign: "center", overflow: "hidden", marginRight: "10px" }}
      >
        <div style={{ marginBottom: 10 }}>
          <ProfilePic />
        </div>
        <div style={{ background: "#30303A", height: "100%" }}>
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
      <AddPartWrapper>
        <BiPlusMedical style={{ fill: "white" }} />
      </AddPartWrapper>
      <Title
        style={{
          fontSize: "13px",
          letterSpacing: -0.2,
          lineHeight: 1,
          margin: "auto",
          padding: "10px 0",
        }}
        className="large"
      >
        {props.name}
      </Title>
      <Tooltip title="Total requests">
        <TotalRequests>
          {matchById.length}
        </TotalRequests>
      </Tooltip>
    </Wrapper>
  );
};

export default SongPart;
