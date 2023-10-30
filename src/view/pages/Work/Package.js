import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import Img1 from '../../../images/package/package_design_ver1.png';
import Img2 from '../../../images/package/package_design_ver2.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {ContentContainer, SectionContainer} from "../../components/Layout/Layout.Styled";
import Footer from "../../components/Footer";
import {media} from "../../../styled/Responsive.Styled";

const Package = () => {

    return (
        <Container>
            <ContentContainer>
                <h1><span>Package</span> Design</h1>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img1} alt={"img1"}/>
                            <Info>
                                <h2>관절 영양제 패키지 디자인</h2>
                                <p>nuon 에서 판매중인 가자추출물 영양제 패키지입니다.</p>
                                <p>관절염이 온 50~60대가 주 고객층인 점을 고려해
                                쉽게 알아볼 수 있는 일러스트로 무릎 관절을 표현했습니다.</p>
                                <p>기존 패키지는 메인컬러를 어두운 남색으로 사용했기에,
                                    저 또한 중후하고 안정감 있어보이는 컬러를 보라색으로 채택했습니다.</p>
                                <p><span>제작 기간 : 2023. 10. 20</span></p>
                                <p><span>사용 툴 : photoshop, illustrator</span></p>
                            </Info>
                        </Contents>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img2} alt={"img2"}/>
                            <Info>
                                <h2>선크림 패키지 디자인</h2>
                                <p>AHC 에서 판매중인 아쿠아 모이스트 선크림입니다.</p>
                                <p>청량감을 주기 위해 레몬색과 하늘색을 배경색으로 주었습니다.</p>
                                <p>일러스트를 패키지에 그려서 선크림의 효과를 단순하게 설명했습니다.</p>
                                <p><span>제작 기간 : 2023. 10. 20</span></p>
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
  width: 70%;
  height: 100%;
  border-radius: 12px;

  ${media.lessThan("lg")`
      width: 100%;
  `};
`;

const Info = styled.div`
  margin: 30px;
  width: 30%;

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
    background: #fff;
    border: 1px solid #18f;
    border-radius: 40px;
    height: 40px;
    margin-bottom: 15px;
    color: #18f;
    cursor: pointer;
    width: 200px;

    &:hover {
      transition: 0.3s;
      color: #fff;
      background: #18f;
    }
  }
`;


export default Package;