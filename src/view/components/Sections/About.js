import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Profile from '../../../images/profile.png';

const About = () => {

    return (
        <Container name={"about"}>
            <ContentContainer>
                <Produce>
                    <FirstSection>
                        <ProfileImg src={Profile} alt={"profile"}/>
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
                                <li>영어 <span>🟧 🟧 ⬜ ⬜ ️⬜️</span></li>
                                <li>일본어 <span>🟧 🟧 🟧 ⬜ ⬜️️</span></li>
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
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 20px;
`;

const FirstSection = styled.div`
  h1 {
    font-size: 30px;
  }
`;

const SecondSection = styled.div`
  margin-left: 30px;
`;

const Side = styled.div`
  color: #333;
  margin-bottom: 30px;
  line-height: 1.6;

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  span {
    color: #999;
  }

  ul {
    padding-left: 20px;
  }

  li {
    padding: 3px 0;
  }


`;


export default About;