import React from 'react';
import styled from 'styled-components';

const Title = ({title, description}) => {

    return (
        <Container>
            <h2>{title}</h2>
            {
                description &&
                <p>{description}</p>
            }
        </Container>

    )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    font-size: 26px;
    text-transform: capitalize;
    font-weight: 500;
    color: #333;
  }
  
  p{
    margin-top: 15px;
    color: #777;
    line-height: 1.6;
    font-size: 18px;
  }
`;

export default Title;