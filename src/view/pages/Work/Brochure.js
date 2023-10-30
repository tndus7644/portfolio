import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import Img1 from '../../../images/poster/portfolio_poster1_rev1.png';
import Img2 from '../../../images/poster/portfolio_poster2_rev1.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {ContentContainer, SectionContainer} from "../../components/Layout/Layout.Styled";
import Footer from "../../components/Footer";
import {media} from "../../../styled/Responsive.Styled";

const Brochure = () => {

    return (
        <Container>
            <ContentContainer>
                <h1><span>Brochure</span> Design</h1>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img1} alt={"img1"}/>
                            <Info>
                                <h2>Title</h2>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
                            </Info>
                        </Contents>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img2} alt={"img2"}/>
                            <Info>
                                <h2>Title</h2>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
                                <p>Enter your description here</p>
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


export default Brochure;