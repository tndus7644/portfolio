import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";

const About = () => {

    return (
        <Container name={"about"}>
            <ContentContainer>
                <Title title={"About"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, delectus deserunt hic modi ratione!"}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default About;