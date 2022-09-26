import React from 'react'
import styled from 'styled-components'
import Text from '../library/styles/Text'

const Wrapper = styled.div`
    background: ${props => props.theme.colors.backgrounds.dark};
    display: inline-block;
    font-size: 13px;
    line-height: 0;
    padding: 10px 5px;
    margin-right: 10px;
`;

const InfoBlock = (props) => {
  return (
    <Wrapper>
        <Text style={{fontSize: 14, lineHeight: 0}}>{props.text}</Text>
    </Wrapper>
  )
}

export default InfoBlock