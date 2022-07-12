import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { BiInfoCircle } from "react-icons/bi";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 300px;

  input, textarea {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-family: inherit;
    border: 1px solid ${(props) => props.theme.colors.utilities.input_border};
    border-radius: 5px;
    background: ${(props) => props.theme.colors.backgrounds.dark};
    color: ${(props) => props.theme.colors.utilities.text};
    &:focus {
      outline: none !important;
    }
  }

  textarea {
    resize: none;
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

const Label = styled.label`
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.utilities.text};
  font-size: 20px;
  margin-bottom: 10px;
  display: inline-block;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const TextField = (props) => {
  const {
    type,
    placeholder,
    name,
    disabled,
    change,
    maxLength,
    value,
    label,
    style,
    min,
    maxWidth,
    component
  } = props;
  const [characterCount, setCharacterCount] = useState(0);
  return (
    <Wrapper style={{...style, width: maxWidth ? '100%' : '300px'}} className={`Field TextField`}>
      {label ? <Label>{label}</Label> : null}
      <InputWrapper>
        <Field
          onKeyUp={(el) => {
            setCharacterCount(el.target.value.length);
            // console.log(el.target);

            return change({
              name,
              value: el.target.value,
            });
          }}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          component={component}
          name={name}
          min={min}
          max={maxLength}
          value={value}
          disabled={disabled}
        />
        {maxLength ? (
          <CharacterCount>
            <span>{characterCount}</span>/<span>{maxLength}</span>
          </CharacterCount>
        ) : null}
      </InputWrapper>
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
    </Wrapper>
  );
};

export default TextField;
