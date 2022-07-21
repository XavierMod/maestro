import { useFormikContext } from "formik";
import React from "react";
import styled from "styled-components";
import ArrayField from "../library/ArrayField";
import GenresInput from "../library/GenresInput";
import RolesInput from "../library/RolesInput";
import Text from "../library/styles/Text";
import Title from "../library/styles/Title";
import TextField from "../library/TextField";
import ProfilePreview from "./ProfilePreview";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding: 40px 0;
`;

const InputsWrapper = styled.div`
  flex: 5;
  height: 100%;
  width: 100%;
  padding-right: 50px;
`;

const SignUpProfile = () => {
  const { values, submitForm } = useFormikContext();

  return (
    <Wrapper>
      <InputsWrapper>
        <Text style={{ marginBottom: "20px" }} className="gorod">
          complete your profile
        </Text>
        <Title className="large">Join Maestro. You’re gonna love it.</Title>

        <TextField
          maxWidth
          style={{ margin: "75px 0" }}
          label="Choose your username"
          name="username"
          type="text"
          value={values.username}
          placeholder="Username"
          maxLength={25}
          change={(el) => console.log(el)}
        />
        <TextField
          maxWidth
          style={{ margin: "75px 0" }}
          label="Age"
          name="age"
          type="number"
          value={values.age}
          placeholder="Age"
          min={1}
          max={150}
          change={(el) => console.log(el)}
        />
        <RolesInput roles={values.roles} />
        <GenresInput genres={values.genres} />
        <TextField
          maxWidth
          style={{ margin: "75px 0" }}
          label="Tell us a bit about you"
          name="bio"
          component="textarea"
          type="text"
          value={values.bio}
          placeholder="e.g. Punk, Rock, etc."
          maxLength={25}
          change={(el) => console.log(el)}
        />
        <TextField
          maxWidth
          style={{ margin: "75px 0" }}
          label="Your social media links"
          name="links"
          type="text"
          value={values.links}
          placeholder="e.g. Punk, Rock, etc."
          maxLength={25}
          change={(el) => console.log(el)}
        />
      </InputsWrapper>
      <ProfilePreview {...values} />
    </Wrapper>
  );
};

export default SignUpProfile;
