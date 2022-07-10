import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  color: ${(props) => props.theme.colors.utilities.text};
  font-size: 25px;
  line-height: 35px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: bold;
  letter-spacing: -4px;

  &.gorod {
    font-family: ${(props) => props.theme.fonts.tertiary};
  }

  &.large {
    font-size: 60px;
    line-height: 60px;
  }
`;

const Title = (props) => {
  const { children, className, style } = props;
  return (
    <Wrapper className={`Text ${className}`} style={style}>
      {children}
    </Wrapper>
  );
};

export default Title;
