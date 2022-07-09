import React from "react";
import styled, { useTheme } from "styled-components";
import Text from "../components/library/styles/Text";
import Title from "../components/library/styles/Title";
import SignInForm from "../components/SignIn/SignInForm";
import SignInPattern from '../assets/svg/sign-in-pattern.svg';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const ImageBackground = styled.div`
  flex: 5;
`;

const FormWrapper = styled.div`
  padding: 50px;
`;

const SignIn = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <ImageBackground>
        <img style={{width: '100%'}} src={SignInPattern} />
      </ImageBackground>
      <FormWrapper style={{ flex: 5 }}>
        <div style={{maxWidth: '500px'}}>
          <Text className="gorod">Welcome back</Text>
          <Title className="large">Sign In to Maestro</Title>
          <Text>
            Do you not have an account yet?{" "}
            <span style={{ color: theme.colors.primary.accent_2 }}>
              Sign Up
            </span>
          </Text>
          <SignInForm />
        </div>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignIn;
