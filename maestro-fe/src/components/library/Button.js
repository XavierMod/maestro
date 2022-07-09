import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 10px;
  display: inline-block;
  padding: 20px 25px;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  width: ${(props) => (props.setWidth ? "300px" : null)};
  transition: all ease 0.2s;

  &.primary {
    background: ${(props) => props.theme.colors.primary.regular};
    color: ${(props) => props.theme.colors.utilities.text};
    border: 1px solid ${(props) => props.theme.colors.primary.regular};
    &:hover {
      background: ${(props) => props.theme.colors.primary.regular};
      border: 1px solid ${(props) => props.theme.colors.primary.regular};
    }
  }
  &.secondary {
    background: ${(props) => props.theme.colors.primary.regular};
    color: white;
    border: 1px solid ${(props) => props.theme.colors.primary.regular};
    &:hover {
      border-radius: 100px;
    }
  }
  &.bordered {
    background: transparent;
    color: ${(props) => props.theme.colors.primary.regular};
    border: 1px solid ${(props) => props.theme.colors.primary.regular};
    &:hover {
      background: ${(props) => props.theme.colors.primary.regular};
      color: white;
      border: 1px solid ${(props) => props.theme.colors.primary.regular};
    }
  }
  &.white {
    background: ${(props) => props.theme.colors.primary.regular};
    color: ${(props) => props.theme.colors.primary.regular};
    border: 1px solid ${(props) => props.theme.colors.primary.regular};
    &:hover {
      border-radius: 100px;
    }
  }
  &.icon {
    padding: 5px;
    font-size: 50px;
    border-radius: 0;
  }
  &.gorod {
    font-family: ${(props) => props.theme.fonts.tertiary};
    border-radius: 0;
    padding: 5px;
    background: ${(props) => props.theme.colors.utilities.text};
    color: ${(props) => props.theme.colors.backgrounds.dark};

    &.accent_1 {
      background: ${(props) => props.theme.colors.primary.accent_2};
      color: ${(props) => props.theme.colors.primary.accent};
    }

    &.accent_2 {
      background: ${(props) => props.theme.colors.primary.accent};
      color: ${(props) => props.theme.colors.primary.accent_2};
    }
  }
`;

const ButtonContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = (props) => {
  const {
    setWidth,
    color,
    grey,
    isDisabled,
    className,
    getStyle,
    fullWidth,
    click,
    type,
    children,
    style,
  } = props;
  return (
    <Wrapper
      setWidth={setWidth}
      color={color}
      style={style}
      className={`Button ${grey} ${isDisabled} ${className} ${getStyle} ${
        fullWidth ? "fullWidth" : ""
      }`}
      onClick={click}
      disabled={isDisabled}
      type={type}
    >
      <ButtonContents>{children}</ButtonContents>
    </Wrapper>
  );
};

export default Button;
