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
        tags:[]
    },
    {
        name:"Blog",
        description:"공부 기록용 블로그입니다.",
        url:"https://gudoc.tistory.com/",
        imgSrc:"https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        tags:[]
    },
    {
        name:"Notion",
        description:"전 회사에서 수행한 프로젝트 목록입니다.",
        url:"https://www.notion.so/60273d44451949a98c90c4d9b73140b5?pvs=4",
        imgSrc:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags:[]
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