import React from 'react'
import styled from 'styled-components'
import ServerDownIcon from '../assets/server-down.png';
import Text from '../components/library/styles/Text';
import Title from '../components/library/styles/Title';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: auto;

  img {
    display: block;
  }
`;

const ServerDown = () => {
  return (
    <Wrapper>
      <img alt="" style={{width: '50px'}} src={ServerDownIcon} />
      <Title style={{maxWidth: '850px'}} className="large">Oh no. Our servers aren’t feeling very well at the moment!</Title>
      <Text>Please try again in a bit. We’ll be back in no time!</Text>
    </Wrapper>
  )
}

export default ServerDown