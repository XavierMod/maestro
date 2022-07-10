import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, FieldArray, useFormikContext } from "formik";

const ArrayField = (props) => {
  const { items, itemKey } = props;
  return (
    <FieldArray
      className="fieldArray"
      name={itemKey}
      render={(arrayHelpers) => (
        <div className="fieldArray__items">
          {items.map((item, index) => (
            <div className="fieldArray__items--item" key={index}>
              <Field
                className="fieldArray__items--input"
                style={{ color: "black" }}
                value={item}
                name={`${itemKey}.${index}`}
              />
              <div onClick={() => arrayHelpers.remove(index)}>
                {props.removeItemButton}
              </div>
            </div>
          ))}
          <div onClick={() => arrayHelpers.push("")}>
            {props.addItemButton}
          </div>
        </div>
      )}
    />
  );
};

export default ArrayField;
