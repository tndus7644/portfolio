import React from 'react';
import styled from 'styled-components';

const Tags = ({tags}) => {

    return (
        <Container>
            {
                tags.map((item, index) =>
                    <Tag key={index}>{item}</Tag>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  height: 26px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  background: #eee;
  color: #777;
  font-size: 10px;
  margin-right: 8px;
  margin-bottom: 8px;
  white-space: nowrap;
  text-transform: capitalize;
  border-radius: 2px;
`;

export default Tags;