import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {ContentContainer, SectionContainer} from "../../components/Layout/Layout.Styled";
import Footer from "../../components/Footer";
import {media} from "../../../styled/Responsive.Styled";
import Img1 from '../../../images/graphic/graphic05.png';
import Img2 from '../../../images/graphic/graphic07.png';
import ImgOrigin from '../../../images/graphic/graphic06.png';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Graphic = () => {

    return (
        <Container>
            <ContentContainer>
                <h1><span>Graphic</span> Design</h1>
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
                                <p>
                                    <a href={ImgOrigin} download={"Original_Promotion_Page1"} target={"_blank"}
                                       rel={"noreferrer"}>
                                        <button>Show Original Image</button>
                                    </a></p>
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
                                <p>
                                    <a href={Img2} download={"Original_Promotion_Page2"} target={"_blank"}
                                       rel={"noreferrer"}>
                                        <button>Show Original Image</button>
                                    </a></p>
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
  max-height: 1200px;
  object-fit: cover;
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


export default Graphic;