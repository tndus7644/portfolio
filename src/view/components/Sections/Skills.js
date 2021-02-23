import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";

const Skills = () => {

    return(
        <Container name={"skills"}>
            <ContentContainer>
                <Title title={"Skills"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, delectus deserunt hic modi ratione!"}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default Skills;