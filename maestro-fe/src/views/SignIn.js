import React from "react";
import styled, { useTheme } from "styled-components";
import Text from "../components/library/styles/Text";
import Title from "../components/library/styles/Title";
import SignInForm from "../components/SignIn/SignInForm";
import SignInPattern from "../assets/svg/sign-in-pattern.svg";
import LineWaves from "../assets/svg/line-waves.svg";
import { Link } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import ContainedLayout from "../layouts/ContainedLayout";

const Wrapper = styled.div`
  display: flex;

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
    <ContainedLayout>
      <Wrapper>
        <ImageBackground>
          <img alt="" style={{ width: "100%" }} src={SignInPattern} />
        </ImageBackground>
        <FormWrapper style={{ flex: 5 }}>
          <img
            alt=""
            style={{ width: "100%", marginBottom: "40px" }}
            src={LineWaves}
          />
          <div style={{ maxWidth: "500px" }}>
            <Text className="gorod">Welcome back</Text>
            <Title className="large">Sign In to Maestro</Title>
            <Text style={{ marginBottom: "20px" }}>
              Do you not have an account yet?{" "}
              <Link
                to="/signup"
                style={{ color: theme.colors.primary.accent_2 }}
              >
                Sign Up
              </Link>
            </Text>
            <SignInForm />
          </div>
        </FormWrapper>
      </Wrapper>
    </ContainedLayout>
  );
};

export default SignIn;
