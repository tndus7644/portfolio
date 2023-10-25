import React from 'react';
import styled from 'styled-components';
import {Overlay} from "../Layout/Layout.Styled";

const Visual = () => {

    return (
        <Container name={"visual"}>
            <Overlay alpha={0.4}/>
            <Content>
                    <h1>Designer engineer</h1>
                    <p>Suyeon's portfoilo</p>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  height: 100vh;
  background: #fff url('https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
    h1{
      font-size: 3em;
      color: #fff;
      line-height: 1.5;
    }
  
  p{
    color: #fff;
    font-size: 2em;
  }
`;



export default Visual;