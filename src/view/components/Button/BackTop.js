import React, {useRef} from 'react';
import styled from 'styled-components';
import {AiOutlineArrowUp} from "react-icons/all";
import {setBoxShadow} from "../../../styled/Util.Styled";
import {scrollToTop} from "../../../lib/Common";

const BackTop = () => {

    const ref = useRef(null);

    return (
        <Container onClick={scrollToTop}>
            <AiOutlineArrowUp/>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  right: 60px;
  bottom: 80px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #18f;
  box-shadow: ${setBoxShadow(2)};
  cursor: pointer;
  transition: 0.4s;
  border-radius: 50%;

  &:hover {
    box-shadow: ${setBoxShadow(3)};
  }
`;

export default BackTop;