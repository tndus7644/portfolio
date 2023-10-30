import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import Img1 from '../../../images/poster/portfolio_poster1_rev1.png';
import Img2 from '../../../images/poster/portfolio_poster2_rev1.jpg';
import {ContentContainer, SectionContainer} from "../../components/Layout/Layout.Styled";
import Footer from "../../components/Footer";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {media} from "../../../styled/Responsive.Styled";

const Poster = () => {

    return (
        <Container>
            <ContentContainer>
                <h1><span>Poster</span> Design</h1>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img1} alt={"img1"}/>
                            <Info>
                                <h2>미술 전시회 포스터</h2>
                                <p>색을 조화롭게 사용해서 감각적 느낌을 내보았습니다.</p>
                                <p>형상과 빛깔을 여러 방법으로 표현했으며, 글자는 모두</p>
                                <p>어두운 컬러를 사용해서 포스터의 느낌과 다르게 대비를 주었습니다.</p>
                                <p><span>제작 기간 : 2023. 10. 18</span></p>
                                <p><span>사용 툴 : photoshop</span></p>
                            </Info>
                        </Contents>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img2} alt={"img2"}/>
                            <Info>
                                <h2>북 페스티벌 홍보 포스터</h2>
                                <p>화려함보다 정적인 느낌을 내기 위해</p>
                                <p>채도가 낮은 컬러를 메인으로 주로 사용했습니다.</p>
                                <p>주요 고객층을 고려해 심플하고 귀여운 이미지의 일러스트를 사용했으며,</p>
                                <p>종이 텍스처 느낌을 전반적으로 연출함으로써 북 페스티벌이란 취지에 맞도록</p>
                                <p>포스터를 디자인한 것이 포인트입니다.</p>
                                <p><span>제작 기간 : 2019. 10</span></p>
                                <p><span>사용 툴 : photoshop, illustrator</span></p>
                            </Info>
                        </Contents>
                    </SwiperSlide>
                </Swiper>
            </ContentContainer>
            <Footer/>
        </Container>
    )
}

const Container = styled(SectionContainer)`
  padding: 30px 0;

  h1 {
    margin-bottom: 30px;

    span {
      color: #18f;
    }
  }

`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  padding: 0 40px;

  ${media.lessThan("lg")`
      flex-direction: column;
  `};

`;

const Img = styled.img`
  width: 60%;
  height: 100%;
  border-radius: 12px;

  ${media.lessThan("lg")`
      width: 100%;
  `};
`;

const Info = styled.div`
  margin: 30px;
  width: 40%;

  ${media.lessThan("lg")`
      width: 100%;
  `};

  p {
    line-height: 2;
    word-break: keep-all;
  }
  
  span{
    color: #999;
    font-size: 14px;
  }

  h2 {
    margin-bottom: 20px;
  }

  button {
    background: #f1f1f1;
    border: 1px solid #18f;
    border-radius: 40px;
    height: 40px;
    margin-bottom: 15px;
    color: #18f;
    cursor: pointer;
    width: 200px;

    &:hover {
      transition: 0.3s;
      color: #f1f1f1;
      background: #18f;
    }
  }
`;


export default Poster;