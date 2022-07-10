import React from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import Asset1 from "../../assets/landing-asset-1.png";
import Text from "../library/styles/Text";
import Title from "../library/styles/Title";
import TextField from "../library/TextField";
import LineWaves from "../../assets/svg/line-waves.svg";
import MPattern from "../../assets/svg/m-pattern.svg";
import Button from "../library/Button";
import { BiDownArrowAlt } from "react-icons/bi";
import { useFormikContext } from "formik";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const TextWrapper = styled.div`
  padding: 0 40px;
`;

const SignUpLanding = () => {
  const theme = useTheme();
  const { values } = useFormikContext();

  return (
    <Wrapper>
      <div style={{ flex: 7 }}>
        <img
          alt=""
          style={{ width: "100%", marginBottom: "40px" }}
          src={LineWaves}
        />
        <TextWrapper>
          <Text className="gorod">MAKE SONGS WITH OTHERS.</Text>
          <Title className="large">Join Maestro. You’re gonna love it.</Title>
          <Text style={{ marginBottom: "20px" }}>
            Do you already have an account?{" "}
            <Link to="/signin" style={{ color: theme.colors.primary.accent_2 }}>
              Sign In
            </Link>
          </Text>
          <TextField
            style={{ margin: "75px 0" }}
            label="Let's start with your email"
            name="email"
            type="email"
            value={values.email}
            placeholder="Email"
            maxLength={25}
            change={(el) => console.log(el)}
          />
        </TextWrapper>
        <img
          alt=""
          style={{ width: "100%", marginTop: "50px" }}
          src={MPattern}
        />
      </div>
      <div style={{ flex: 3, position: "relative", margin: "30px" }}>
        <img
          alt=""
          style={{ width: "400px", marginBottom: "40px" }}
          src={Asset1}
        />
        <Link to="profile">
          <Button
            style={{ position: "absolute", right: 0, bottom: 0 }}
            type="submit"
            className="icon"
          >
            <BiDownArrowAlt style={{ rotate: "-90deg" }} />
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default SignUpLanding;
