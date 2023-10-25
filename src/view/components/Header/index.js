import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {AiOutlineMenu} from "react-icons/all";
import {media} from "../../../styled/Responsive.Styled";
import {Link} from 'react-scroll';
import {setBoxShadow} from "../../../styled/Util.Styled";
import {setScrollEvent} from "../../../hooks/useScrollEvent";
import {appActions} from "../../../redux/ActionCreators";
import {menus} from "../Menus";

const Header = () => {

    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            setScrollEvent(headerRef.current, 'isActive', 600)
        }
    }, [])


    const handleSidebar = () => {
        appActions.updateState({
            sidebar: true
        })
    }


    return (
        <Container ref={headerRef}>
            <Logo>SUYEON</Logo>
            <Nav>
                {menus.map((item, i) => (
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
                ))
                }
            </Nav>
            <ButtonMenu onClick={handleSidebar}>
                <AiOutlineMenu/>
            </ButtonMenu>
        </Container>
    )
}

const Container = styled.header`
  display: flex;
  padding: 0 50px;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: ${setBoxShadow(1)};
  background: #fff;
  transform: translateY(-100%);
  transition: 0.4s;

  &.isActive {
    transform: none;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;

  ${media.lessThan("md")`
    display: none;
  `};
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

const ButtonMenu = styled.div`
  font-size: 24px;
  padding: 10px;
  display: none;
  
  ${media.lessThan("md")`
    display: flex;
  cursor: pointer;
  `};

`;

export default Header;