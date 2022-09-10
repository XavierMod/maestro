import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 500px;
`;

const ProfilePic = () => {
  return (
    <Wrapper
      alt=""
      src="https://picsum.photos/200/300"
    />
  );
};

export default ProfilePic;
