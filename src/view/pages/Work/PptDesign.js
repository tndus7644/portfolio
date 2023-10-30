import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import Img1 from '../../../images/ppt/ppt_design_ver1_thumbnail.png';
import Img2 from '../../../images/ppt/ppt_design_ver2_thumbnail.png';
import PdfFile1 from "../../../file/pdf/ppt_designVer1_rev1.pdf";
import PptFile1 from '../../../file/ppt/ppt_designVer1_rev1.pptx';
import PdfFile2 from '../../../file/pdf/ppt_designVer2_rev1.pdf';
import PptFile2 from '../../../file/ppt/ppt_designVer2_rev1.pptx';
import {ContentContainer, SectionContainer} from "../../components/Layout/Layout.Styled";
import Footer from "../../components/Footer";
import {media} from "../../../styled/Responsive.Styled";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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
                                <h2>사업 전략 계획서 피피티</h2>
                                <p>심플하고 차분한 느낌의 파워포인트 샘플입니다.</p>
                                <p>구성 내용은 아래 pdf, ppt 파일에서 확인할 수 있습니다.</p>
                                <p>ppt 파일은 애니메이션이 적용되어 있으며,</p>
                                <p>메인 컬러를 디자인탭에서 변경할 수 있습니다.</p>
                                <p><span>제작 기간 : 2023. 10. 25 ~ 2023. 10. 26</span></p>
                                <p><span>사용 툴 : powerpoint</span></p>
                                <p>
                                    <a href={PdfFile1} download={"PPT_PDF_document"} target={"_blank"}
                                       rel={"noreferrer"}>
                                        <button>Download Pdf File</button>
                                    </a></p>
                                <p>
                                    <a href={PptFile1} download={"PPT_document"} target={"_blank"} rel={"noreferrer"}>
                                        <button>Download Powerpoint File</button>
                                    </a></p>
                            </Info>
                        </Contents>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Contents>
                            <Img src={Img2} alt={"img2"}/>
                            <Info>
                                <h2>연간 보고서 피피티</h2>
                                <p>심플하고 지적인 느낌의 파워포인트 샘플입니다.</p>
                                <p>구성 내용은 아래 pdf, ppt 파일에서 확인할 수 있습니다.</p>
                                <p>ppt 파일은 애니메이션이 적용되어 있으며,</p>
                                <p>메인 컬러를 디자인탭에서 변경할 수 있습니다.</p>
                                <p><span>제작 기간 : 2023. 10. 28 ~ 2023. 10. 29</span></p>
                                <p><span>사용 툴 : powerpoint</span></p>
                                <p>
                                <a href={PdfFile2} download={"PPT_PDF_document"} target={"_blank"}
                                   rel={"noreferrer"}>
                                    <button>Download Pdf File</button>
                                </a></p>
                                <p>
                                    <a href={PptFile2} download={"PPT_document"} target={"_blank"} rel={"noreferrer"}>
                                        <button>Download Powerpoint File</button>
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


export default PptDesign;