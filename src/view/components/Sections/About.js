import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";

const About = () => {


    return (
        <Container name={"about"}>
            <ContentContainer>
                <Title title={"About"}
                       description={"제가 프론트엔드를 희망하게 된 계기는 어느 블로그의 글이었습니다.\n" +
                       "\"html, css는 사실 개발언어라고 보기 어렵다\" 라는 글을 보고, 당시 웹에 관심을 갖고 있던 저는\n" +
                       "제 자신이 모르는 영역이 있다는 사실에 통감하여 개발언어라고 당당하게 말할 수 있는 것을 배워야겠다 마음을 먹었습니다.\n" +
                       "그렇게 자연스럽게 웹 프론트엔드가 되기위해 공부를 시작했고, 여러 프로젝트를 만들어보며 실력을 다져왔습니다.\n" +
                       "지금도 배워나가겠다는 마음가짐은 현재진행형입니다."}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default About;