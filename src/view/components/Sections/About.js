import React from 'react';
import styled from 'styled-components';
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import Title from "../Title";

const About = () => {

    return (
        <Container name={"about"}>
            <ContentContainer>
                <Title title={"About"}
                       description={"제가 프론트엔드를 희망하게 된 계기는 어느 블로그의 글이었습니다.\n" +
                       "\"html, css는 사실 개발언어라고 보기 어렵다\" 라는 글을 보고, 당시 웹에 관련해서 얕게만 알고 있던 저는\n" +
                       "제 자신이 모르는 영역이 있다는 사실에 통감하여 개발언어라고 당당하게 말할 수 있는 것을 배워야겠다 마음을 먹었습니다.\n" +
                       "그렇게 자연스럽게 웹 프론트엔드가 되기위해 공부를 시작했고, 여러 프로젝트를 만들어보며 실력을 다져왔습니다.\n" +
                       "지금도 배워나가겠다는 마음가짐은 현재진행형입니다."}/>
                <Produce>
                    <Desc>
                        <li>
                            <h1>01</h1>
                            <p>
                                <span>개발을 할 때는 누군가를 가르칠 수 있는 수준이 될 때까지 반복해서 제 것으로 만드는 끈질김으로 임합니다.</span>
                            </p>
                        </li>
                        <li>
                            <h1>02</h1>
                            <p>프로젝트를 완성해나가는 과정에서 가시적으로 보이는 결과물을 보고 개발을 하는 희열을 느끼며, 이를 통해 개발을 하는 뚜렷한 목적을 깨닫습니다.</p>
                        </li>
                        <li>
                            <h1>03</h1>
                            <p>효율적인 코드를 짜기 위해 고민하고 노력하는 것은 개발자에게 필수입니다. 저 또한 사람들과 생각을 공유하며 리팩토링 하는 것을 좋아합니다.</p>
                        </li>
                    </Desc>
                </Produce>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(SectionContainer)`

`;

const Produce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Desc = styled.ul`

  li {
    padding: 15px 0;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    line-height: 1.5;
  }

  p {
    color: #777;
    font-size: 15px;
    word-break: keep-all;
    line-height: 1.5;
  }
`;


export default About;