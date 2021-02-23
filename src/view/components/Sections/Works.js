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
        url:"https://unsplash.com/",
        imgSrc:"https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
        tags:["react", "redux saga", "redux", "styled components"]
    },
    {
        name:"Youtube",
        description:"Unsplash API를 이용한 클론 프로젝트",
        url:"https://unsplash.com/",
        imgSrc:"https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
        tags:["react", "redux saga", "redux", "styled components"]
    },
    {
        name:"Unsplash",
        description:"Unsplash API를 이용한 클론 프로젝트",
        url:"https://unsplash.com/",
        imgSrc:"https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
        tags:["react", "redux saga", "redux", "styled components"]
    }
]

const Works = () => {

    const render = (item) => <WorkCard {...item}/>

    return(
        <Container name={"works"}>
            <ContentContainer>
                <Title title={"Works"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, delectus deserunt hic modi ratione!"}/>
                <List data={works} render={render}/>
            </ContentContainer>
        </Container>
    )
}


const Container = styled(SectionContainer)`

`;

export default Works;