import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";

const Skills = () => {

    return (
        <Container name={"skills"}>
            <ContentContainer>
                <Title title={"Skills"}/>
                <SkillsContent>
                    <h1>Design |</h1>
                    <ul>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Zeplin</li>
                    </ul>
                </SkillsContent>
                <SkillsContent>
                    <h1>Development |</h1>
                    <ul>
                        <li>Html5</li>
                        <li>Css</li>
                        <li>Sass</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Javascript</li>
                    </ul>
                </SkillsContent>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

const SkillsContent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  h1{
    color: #333;
    font-weight: 600;
    font-size: 18px;
  }

  ul {
    display: flex;

    li {
      padding: 0 15px;
      color: #666;
    }
  }
`;


export default Skills;