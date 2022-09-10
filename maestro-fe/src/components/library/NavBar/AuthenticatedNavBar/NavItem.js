import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Text from "../../../library/styles/Text";

const Wrapper = styled.div`
  display: inline-flex;
  height: 100%;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const ActiveLine = styled.div`
  background: white;
  width: 30%;
  height: 5px;
  position: absolute;
  bottom: 0;
`;

const NavItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `${props.link}`) {
      setIsActive(true);
    }
  }, [props.link, location.pathname]);

  return (
    <NavLink to={props.link}>
      <Wrapper>
        <Text>{props.text}</Text>
        {isActive ? <ActiveLine /> : null}
      </Wrapper>
    </NavLink>
  );
};

NavItem.propTypes = {
  text: PropTypes.any,
};

export default NavItem;
