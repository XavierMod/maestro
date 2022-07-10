import { useFormikContext } from "formik";
import React from "react";
import styled from "styled-components";
import ArrayField from "../library/ArrayField";
import GenresInput from "../library/GenresInput";
import Title from "../library/styles/Title";
import TextField from "../library/TextField";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 40px;
`;

const InputsWrapper = styled.div`
  flex: 5;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding-right: 50px;
`;

const ProfilePreview = styled.div`
  flex: 5;
  height: 100%;
  border: 1px solid red;
`;

const SignUpProfile = () => {
  const { values, submitForm } = useFormikContext();

  return (
    <Wrapper>
      <InputsWrapper>
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
        <p>{JSON.stringify(values.roles)}</p>
        <GenresInput values={values} />
        <TextField
          maxWidth
          style={{ margin: "75px 0" }}
          label="What type of music do you make?"
          name="genres"
          type="text"
          value={values.genres}
          placeholder="e.g. Punk, Rock, etc."
          maxLength={25}
          change={(el) => console.log(el)}
        />
        <TextField
          maxWidth
          style={{ margin: "75px 0" }}
          label="Tell us a bit about you"
          name="bio"
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
    </Wrapper>
  );
};

export default SignUpProfile;
