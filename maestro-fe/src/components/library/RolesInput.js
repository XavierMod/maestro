import React from "react";
import styled from "styled-components";
import ArrayField from "./ArrayField";
import { BiMessageSquareMinus, BiPlusCircle } from "react-icons/bi";

const Wrapper = styled.div`
  .fieldArray__items--item {
    display: inline-flex;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;

    .fieldArray__items--input {
      display: inline-flex;
      background: transparent;
      border: none;
      font-family: inherit;
      font-size: 16px;
      color: ${(props) => props.theme.colors.backgrounds.dark};
      background: white;
      border-radius: 4px;
      width: 100%;
      width: 100px !important;
      padding-left: 10px;
    }
  }

  .fieldArray__items--removeButton {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
    background: white;

    svg {
      &:hover {
        transform: scale(1.3);
      }
    }
  }

  .fieldArray__items--addItemButton {
    display: inline-block;
    cursor: pointer;
  }

  .fieldArray__items {
    position: relative;
    margin-bottom: 30px;
    width: 300px;
    width: 100%;
    padding: 17px;
    font-size: 16px;
    font-family: inherit;
    border: 1px solid ${(props) => props.theme.colors.utilities.input_border};
    border-radius: 5px;
    background: ${(props) => props.theme.colors.backgrounds.dark};
  }
`;

const RolesInput = (props) => {
  return (
    <Wrapper>
      <ArrayField
        maxWidth
        style={{ margin: "75px 0" }}
        label="What do you play?"
        name="roles"
        type="text"
        items={props.roles}
        itemKey="roles"
        placeholder="e.g. Guitar, bass..."
        maxLength={25}
        change={(el) => console.log(el)}
        removeItemButton={<BiMessageSquareMinus fill="black" />}
        addItemButton={
          <p style={{ display: "flex" }}>
            <BiPlusCircle style={{ marginRight: "10px" }} /> Add item
          </p>
        }
      />
    </Wrapper>
  );
};

export default RolesInput;
