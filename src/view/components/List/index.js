import React from 'react';
import styled from 'styled-components';

const List = ({data, render}) => {

    return(
        <Container>
            <Row>
                {
                    data.map((item, index) =>
                        <Col key={index}>
                            {render(item)}
                        </Col>)
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const Col = styled.div`
    width: 33.3333%;
  padding: 15px;
`;

export default List;