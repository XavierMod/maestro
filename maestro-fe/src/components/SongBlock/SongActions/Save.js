import React from 'react'
import styled from 'styled-components'
import { BiBookmark } from "react-icons/bi";
import Text from '../../library/styles/Text';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background: #30303A;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    margin-left: 10px;
`;

const Save = () => {
  return (
    <Wrapper>
        <BiBookmark style={{fill: 'white'}} />
    </Wrapper>
  )
}

export default Save