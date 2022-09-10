import React from "react";
import styled from "styled-components";
import Button from "../library/Button";
import Text from "../library/styles/Text";

const Wrapper = styled.div`
  flex: 5;
  height: 100%;
  position: sticky;
  top: 0;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  height: 170px;
  position: relative;
  background: #15151b;
`;

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.span`
  background: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: bold;
  margin-right: 10px;
`;
const Bio = styled.div`
  margin-top: 10px;
`;

const ProfilePreview = (props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <div style={{ position: "absolute", bottom: 0, padding: "20px" }}>
          <Text className="gorod">
            #{props.username}, {props.age}
          </Text>
          <Text style={{fontSize: 13, opacity: 0.5}}>Your email: {props.email}</Text>
        </div>
      </ImageWrapper>
      <AboutWrapper>
        <Text style={{ fontSize: "20px" }} className="secondary">
          About
        </Text>
        <div style={{ marginLeft: "20px" }}>
          {props.roles.map((el) => {
            return <Tag>{el}</Tag>;
          })}
        </div>
      </AboutWrapper>
      <Text style={{marginTop: '10px'}}>{props.bio}</Text>
      <div style={{ textAlign: "right", marginTop: "200px" }}>
        <Button style={{ marginRight: "20px" }} className="gorod">
          skip
        </Button>
        <Button className="gorod accent_2">finish</Button>
      </div>
    </Wrapper>
  );
};

export default ProfilePreview;
