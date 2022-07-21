import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/logo.svg";
import Button from "./Button";
const Wrapper = styled.div`
  display: flex;
`;

const Section = styled.div`
  flex: 5;
  z-index: 100;
  position: relative;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Section>
        <Link to="/">
          <img alt="" style={{ width: "100px" }} src={Logo} />
        </Link>
      </Section>
      <Section style={{ textAlign: "right" }}>
        <Link to="/signin">
          <Button style={{ marginRight: "20px" }} className="gorod">
            sign in
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="gorod accent_2">sign up</Button>
        </Link>
      </Section>
    </Wrapper>
  );
};

export default NavBar;
