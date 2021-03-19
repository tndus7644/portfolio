import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {AiOutlineArrowUp} from "react-icons/all";
import {setBoxShadow} from "../../../styled/Util.Styled";
import {scrollToTop} from "../../../lib/Common";
import {setScrollEvent} from "../../../hooks/useScrollEvent";

const BackTop = () => {

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            setScrollEvent(ref.current, 'isActive', 1500)
        }
    }, [])

    return (
        <Container onClick={scrollToTop} ref={ref}>
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
  background: #ff8644;
  box-shadow: ${setBoxShadow(2)};
  cursor: pointer;
  transition: 0.4s;
  border-radius: 50%;
  transform: translateY(200px);
  
  &.isActive{
    transform:none;
  }

  &:hover {
    box-shadow: ${setBoxShadow(3)};
  }
`;

export default BackTop;