import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, FieldArray, useFormikContext } from "formik";

const ArrayField = (props) => {
  const { items, itemKey } = props;
  return (
    <FieldArray
      name={itemKey}
      render={(arrayHelpers) => (
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <Field
                style={{ color: "black" }}
                value={item}
                name={`${itemKey}.${index}`}
              />
              <button
                type="button"
                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={() => arrayHelpers.push("")}>
            {/* show this when user has removed all friends from the list */}
            Add a friend
          </button>
        </div>
      )}
    />
  );
};

export default ArrayField;
