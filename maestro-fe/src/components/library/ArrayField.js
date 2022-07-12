import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, FieldArray, useFormikContext } from "formik";

const Label = styled.label`
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.utilities.text};
  font-size: 20px;
  margin-bottom: 10px;
  display: inline-block;
`;

const ArrayField = (props) => {
  const { items, itemKey, label } = props;

  const generateInvertedClass = (ind) => {
    if (ind & 1) {
      return "even";
    } else {
      return "not-even";
    }
  };

  return (
    <FieldArray
      className="fieldArray"
      name={itemKey}
      render={(arrayHelpers) => (
        <div className="fieldArray__wrapper">
          {label ? <Label className="fieldArray__label">{label}</Label> : null}

          <div className="fieldArray__items">
            {items.map((item, index) => (
              <div
                onMouseLeave={() => {
                  if (item === "") {
                    arrayHelpers.remove(index);
                  }
                }}
                className={`fieldArray__items--item ${
                  props.invertItemClasses ? generateInvertedClass(index) : null
                }`}
                key={index}
              >
                <Field
                  onBlur={() => {
                    if (item === "") {
                      arrayHelpers.remove(index);
                    }
                  }}
                  className="fieldArray__items--input"
                  value={item}
                  name={`${itemKey}.${index}`}
                />
                <div
                  className="fieldArray__items--removeButton"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  {props.removeItemButton}
                </div>
              </div>
            ))}
            <div
              className="fieldArray__items--addItemButton"
              onClick={() => {
                if (!items.filter((el) => el === "").length >= 1) {
                  arrayHelpers.push("");
                }
              }}
            >
              {props.addItemButton}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default ArrayField;
