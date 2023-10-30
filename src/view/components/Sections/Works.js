import React, {useState} from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";
import List from "../List";
import WorkCard from "../Card/WorkCard";
import Img1 from "../../../images/poster/portfolio_poster1_rev1.png";
import Img2 from "../../../images/ppt/ppt_design_ver1_thumbnail.png";
import Img3 from "../../../images/package/package_design_ver1.png";

import GraphicImg1 from '../../../images/graphic/graphic01.png';
import GraphicImg2 from '../../../images/graphic/graphic02.png';
import GraphicImg3 from '../../../images/graphic/graphic03.png';
import GraphicImg4 from '../../../images/graphic/graphic04.png';
import GraphicImg5 from '../../../images/graphic/graphic05.png';
import GraphicImg6 from '../../../images/graphic/graphic06.png';
import GraphicImg7 from '../../../images/graphic/graphic07.png';

//light box
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const works = [
    {
        name: "포스터 디자인",
        description: "전시회, 축제에 사용할 수 있는 포스터 디자인",
        url: "/poster",
        imgSrc: Img1,
        tags: ["photoshop", "illustrator"]
    },
    {
        name: "ppt 디자인",
        description: "사업계획서나 보고서로 활용할 수 있는 ppt 템플릿 디자인",
        url: "/ppt",
        imgSrc: Img2,
        tags: ["powerpoint", "illustrator"]
    },
    {
        name: "패키지 디자인",
        description: "제품에 특성에 맞춰 작업한 다양한 종류의 패키지 디자인",
        url: "/package",
        imgSrc: Img3,
        tags: ["photoshop", "illustrator"]
    },
]

const Works = () => {

    const render = (item) => <WorkCard {...item}/>
    const [index, setIndex] = useState(-1);

    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    const lists = [
        {src: GraphicImg1, width: 850, height: 300},
        {src: GraphicImg2, width: 850, height: 200},
        {src: GraphicImg3, width: 850, height: 800},
        {src: GraphicImg4, width: 850, height: 1000},
        {src: GraphicImg5, width: 850, height: 1082},
        {src: GraphicImg7, width: 850, height: 2419},
    ];

    const photos = lists.map((list) => ({
        src: list.src,
        width: list.width,
        height: list.height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((list.height / list.width) * breakpoint);
            return {
                src: list.src,
                width: breakpoint,
                height,
            };
        }),
    }));

    const lightBoxImg = [
        {src: GraphicImg1, width: 850, height: 300},
        {src: GraphicImg2, width: 850, height: 200},
        {src: GraphicImg3, width: 850, height: 800},
        {src: GraphicImg4, width: 850, height: 1000},
        {src: GraphicImg6, width: 850, height: 1082},
        {src: GraphicImg7, width: 850, height: 2419},
    ];

    return (
        <Container name={"works"}>
            <ContentContainer>
                <Title title={"Works"}
                       description={"제가 해온 작업물을 기록한 페이지 입니다."}/>
                <List data={works} render={render}/>
                <MoreContent>
                    <p>작업물 더보기 <span>(클릭하면 원본을 확인할 수 있습니다)</span></p>
                    <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150}
                                onClick={({index}) => setIndex(index)}/>
                    <Lightbox
                        slides={lightBoxImg}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                </MoreContent>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

const MoreContent = styled.div`
  margin-top: 30px;
  
  p{
    margin-bottom: 15px;
    font-weight: 200;
    font-size: 18px;
  }
  
  span{
    font-size: 14px;
    color: #999;
    font-weight: 100;
  }
`;

export default Works;