import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  color: ${(props) => props.theme.colors.utilities.text};
  font-size: 16px;
  line-height: 35px;
  font-family: ${(props) => props.theme.fonts.primary};

  &.gorod {
    font-family: ${(props) => props.theme.fonts.tertiary};
  }

  &.secondary {
    font-family: ${(props) => props.theme.fonts.secondary};
  }
`;

const Text = (props) => {
  const { children, className, style } = props;
  return (
    <Wrapper className={`Text ${className}`} style={style}>
      {children}
    </Wrapper>
  );
};

export default Text;
