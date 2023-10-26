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
      color: #ff8644;
    }
  }

`;

const Contents = styled.div`
  display: flex;

  ${media.lessThan("md")`
      flex-direction: column;
      align-items: center;
  `};
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
`;

const Line = styled.div`
  border: 1px solid #ff8644;
  width: 100%;
  max-width: 500px;
  height: 1px;
  margin: 20px 0;
`;

const Info = styled.div`
  margin: 30px;

  p {
    line-height: 2;
  }

  h2{
    margin-bottom: 20px;
  }
`;


export default Poster;