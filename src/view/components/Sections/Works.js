import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";
import List from "../List";
import WorkCard from "../Card/WorkCard";
import Img1 from "../../../images/poster/portfolio_poster1_rev1.png";
import Img2 from "../../../images/ppt/ppt_design_ver1_thumbnail.png";
import Img4 from "../../../images/package/package_design_ver1.png";

const works = [
    {
        name:"포스터 디자인",
        description:"전시회, 축제에 사용할 수 있는 포스터",
        url:"/poster",
        imgSrc:Img1,
        tags:["photoshop","illustrator"]
    },
    {
        name:"ppt 디자인",
        description:"사업계획서나 보고서로 활용할 수 있는 ppt 템플릿",
        url:"/ppt",
        imgSrc:Img2,
        tags:["powerpoint", "illustrator"]
    },
    {
        name:"브로슈어 디자인",
        description:"회사소개서로 사용할 수 있는 브로슈어",
        url:"/brochure",
        imgSrc:"",
        tags:["photoshop", "illustrator", "indesign"]
    },
    {
        name:"패키지 디자인",
        description:"제품에 특성에 맞춰 작업한 다양한 종류의 패키지",
        url:"/package",
        imgSrc:Img4,
        tags:["photoshop", "illustrator"]
    },
    {
        name:"배너 디자인",
        description:"이벤트 등에 사용할 수 있는 배너",
        url:"/banner",
        imgSrc:"",
        tags:["photoshop", "illustrator"]
    }
]

const Works = () => {

    const render = (item) => <WorkCard {...item}/>

    return(
        <Container name={"works"}>
            <ContentContainer>
                <Title title={"Works"}
                       description={"제가 해온 작업물을 기록한 페이지 입니다."}/>
                <List data={works} render={render}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

export default Works;