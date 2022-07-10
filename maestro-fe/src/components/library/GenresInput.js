import React from "react";
import styled from "styled-components";
import ArrayField from "./ArrayField";

const Wrapper = styled.div`
  .fieldArray__items--input {
    border: 1px solid red;
  }
`;

const GenresInput = (props) => {
  return (
    <Wrapper>
      <ArrayField
        maxWidth
        style={{ margin: "75px 0" }}
        label="What do you play?"
        name="roles"
        type="text"
        items={props.values.roles}
        itemKey="roles"
        placeholder="e.g. Guitar, bass..."
        maxLength={25}
        change={(el) => console.log(el)}
        removeItemButton={<p>remove</p>}
        addItemButton={<p>Add item</p>}
      />
    </Wrapper>
  );
};

export default GenresInput;
