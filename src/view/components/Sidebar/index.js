import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import cn from 'classnames';

const Sidebar = () => {

    const {sidebar} = useSelector(state => state.app);

    return(
        <Container className={cn({show:sidebar})}>
            Sidebar
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  background: #fff;
  z-index: 1500;
  box-shadow: 0 1px 10px 8px rgba(0,0,0,0.05);
  transition: 0.3s;
  transform: translateX(120%);
  
  &.show{
    transform: none;
  }
`;

export default Sidebar;