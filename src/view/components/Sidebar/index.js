import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import cn from 'classnames';
import {Link} from "react-scroll";
import {menus} from "../Menus";
import {setScrollEvent} from "../../../hooks/useScrollEvent";

const Sidebar = () => {

    const {sidebar} = useSelector(state => state.app);

    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            setScrollEvent(headerRef.current, 'isActive', 600)
        }
    }, [])

    return (
        <Container className={cn({show: sidebar})}>
            {menus.map((item, i) =>
                <NavItem activeClass="isActive"
                         key={i}
                         to={item.to}
                         spy={true}
                         smooth={true}
                         hashSpy={true}
                         offset={-70}
                         duration={500}
                         delay={100}
                         ignoreCancelEvents={false}
                >
                    {item.name}
                </NavItem>
            )}
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background: #fff;
  z-index: 1500;
  box-shadow: 0 1px 10px 8px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  transform: translateX(-120%);

  &.show {
    transform: none;
  }
`;


const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 0 10px;
  font-size: 16px;
  height: 70px;
  text-transform: capitalize;
  cursor: pointer;

  &.isActive,
  &:hover {
    color: #ff8644;
  }
`;

export default Sidebar;