import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";
import List from "../List";
import WorkCard from "../Card/WorkCard";

const works = [
    {
        name:"Unsplash",
        description:"Unsplash API를 이용한 클론 프로젝트",
        url:"https://brave-jones-b7aaa8.netlify.app/",
        imgSrc:"https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
        tags:["react", "redux saga", "redux", "styled components"]
    },
    {
        name:"Youtube",
        description:"Unsplash API를 이용한 클론 프로젝트",
        url:"https://suspicious-jang-e29a61.netlify.app/",
        imgSrc:"https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        tags:["react", "redux saga", "redux", "styled components"]
    },
    {
        name:"Twitch",
        description:"twitch API를 이용한 클론 프로젝트",
        url:"https://reverent-blackwell-9c6a2a.netlify.app/",
        imgSrc:"https://images.unsplash.com/photo-1527334919515-b8dee906a34b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        tags:["react", "redux saga", "redux", "styled components"]
    },
    {
        name:"Github",
        description:"제 github 사이트입니다.",
        url:"https://github.com/tndus7644",
        imgSrc:"https://images.unsplash.com/photo-1591453089343-9ee5e4ac7e2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        tags:["react", "redux saga", "redux", "styled components"]
    }
]

const Works = () => {

    const render = (item) => <WorkCard {...item}/>

    return(
        <Container name={"works"}>
            <ContentContainer>
                <Title title={"Works"}
                       description={"제가 해온 작업물과 내용을 기록한 페이지 입니다."}/>
                <List data={works} render={render}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default Works;