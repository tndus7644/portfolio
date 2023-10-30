import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Profile from '../../../images/profile.png';
import ProgressBar from "@ramonak/react-progress-bar";
import {media} from "../../../styled/Responsive.Styled";

const About = () => {

    return (
        <Container name={"about"}>
            <ContentContainer>
                <Produce>
                    <FirstSection>
                        <ProfileImg src={Profile} alt={"profile"}/>
                        <hr/>
                        <h1>Su Yeon Seo</h1>
                    </FirstSection>
                    <SecondSection>
                        <Side>
                            <h1>Contact</h1>
                            <p>Tel. 010-8012-5260</p>
                            <p>E. 1234bottlewater@gmail.com</p>
                        </Side>
                        <Side>
                            <h1>Career</h1>
                            <p><b>ELTRAN</b> <span>2021. 07 ~ 2023. 03</span></p>
                            <ul>
                                <li>데이터 시각화 그래프 구현 및 개발</li>
                                <li>IoT(사물인터넷) 기기의 웹앱 인터페이스 구현 및 개발</li>
                                <li>소규모 프로젝트 펌웨어 개발, 회로도, PCB 개발</li>
                            </ul>
                        </Side>
                        <Side>
                            <h1>Education</h1>
                            <ul>
                                <li>신일비즈니스고등학교 마케팅디자인과 <span>2015. 03 - 2017. 02</span></li>
                                <li>폴리텍대학 정수캠퍼스 시각디자인과 <span>2018. 03 - 2020. 02</span></li>
                            </ul>
                        </Side>
                        <Side>
                            <h1>Language</h1>
                            <ul>
                                <li><p>영어</p><ProgressBar completed={30} isLabelVisible={false} height={"15px"}
                                                          bgColor={"#18f"} baseBgColor={"#e3e3e5"}/></li>
                                <li><p>일본어</p>
                                    <ProgressBar completed={50} isLabelVisible={false} height={"15px"}
                                                 bgColor={"#18f"} baseBgColor={"#e3e3e5"}/>
                                </li>
                                <li>
                                    2022. 02 JLPT N2 합격
                                </li>
                            </ul>
                        </Side>
                    </SecondSection>
                </Produce>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

const Produce = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  p {
    color: #666;
  }

  li {
    color: #666;
  }


  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  `};
`;

const ProfileImg = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 20px;
`;

const FirstSection = styled.div`

  h1 {
    text-align: right;
    font-size: 30px;
    line-height: 2;
  }


  ${media.lessThan("sm")`
    h1{
        text-align: center;
    }
  `};

`;

const SecondSection = styled.div`
  margin-left: 30px;


  ${media.lessThan("sm")`
    margin-left: 0;
  `};
`;

const Side = styled.div`
  margin-bottom: 30px;
  line-height: 1.6;

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  span {
    color: #adadad;
  }

  ul {
    padding-left: 20px;
  }

  li {
    padding: 5px 0;
  }


`;


export default About;