import React from 'react'
import styled from 'styled-components'
import { BiHeart } from "react-icons/bi";
import Text from '../../library/styles/Text';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background: #30303A;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
`;

const Like = () => {
  return (
    <Wrapper>
        <BiHeart style={{fill: 'white', marginRight: 10}} />
        <Text style={{lineHeight: 0}}>113</Text>
    </Wrapper>
  )
}

export default Like