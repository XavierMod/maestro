import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { BiInfoCircle } from "react-icons/bi";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 300px;

  input {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-family: inherit;
    border: 1px solid ${(props) => props.theme.colors.utilities.input_border};
    border-radius: 5px;
    background: ${(props) => props.theme.colors.backgrounds.dark};
    &:focus {
      outline: none !important;
    }
  }
  .ErrorMessage {
    color: ${(props) => props.theme.colors.utilities.text};
    font-size: 14px;
  }
`;

const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

const CharacterCount = styled.div`
  color: ${(props) => props.theme.colors.utilities.text};
  background: ${(props) => props.theme.colors.primary.accent};
  display: inline-block;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const TextField = (props) => {
  const { type, placeholder, name, disabled, change, maxLength, value } = props;
  const [characterCount, setCharacterCount] = useState(0);
  return (
    <Wrapper className={`Field TextField`}>
      <Field
        onKeyUp={(el) => {
          if (change) {
            setCharacterCount(el.target.value.length);
            return change({
              name,
              value: el.target.value,
            });
          }
          return null;
        }}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        name={name}
        value={value}
        disabled={disabled}
      />
      <ErrorMessage
        className="ErrorMessage"
        render={(message) => {
          return (
            <ErrorMessageWrapper>
              <BiInfoCircle style={{ marginRight: "5px" }} fill="white" />
              <p className="ErrorMessage">{message}</p>
            </ErrorMessageWrapper>
          );
        }}
        name={name}
        component="div"
      />
      {maxLength ? (
        <CharacterCount>
          <span>{characterCount}</span>/<span>{maxLength}</span>
        </CharacterCount>
      ) : null}
    </Wrapper>
  );
};

export default TextField;
