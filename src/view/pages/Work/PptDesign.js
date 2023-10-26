import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import Img1 from '../../../images/ppt/ppt_design_ver1_thumbnail.png';
import PdfFile from "../../../file/pdf/ppt_designVer1_rev1.pdf";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {ContentContainer, SectionContainer} from "../../components/Layout/Layout.Styled";
import Footer from "../../components/Footer";
import {media} from "../../../styled/Responsive.Styled";

const PptDesign = () => {

    return (
        <Container>
            <ContentContainer>
                <h1><span>PPT</span> Design</h1>
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
                                <a href={PdfFile} download={"PPT_PDF_document"} target={"_blank"} rel={"noreferrer"}>
                                    <button>Download Pdf File</button>
                                </a>
                            </Info>
                        </Contents>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img1} alt={"img2"}/>
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
  max-width: 700px;
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


export default PptDesign;