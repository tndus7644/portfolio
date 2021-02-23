import React, {useRef, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {AiOutlineMenu} from "react-icons/all";
import {media} from "../../../styled/Responsive.Styled";
import {Link} from 'react-scroll'
import {setBoxShadow} from "../../../styled/Util.Styled";
import {setScrollEvent} from "../../../hooks/useScrollEvent";


const Header = () => {

    const menus = [
        {
            name: "visual",
            to: 'visual',
        },
        {
            name: "about",
            to: 'about',
        },
        {
            name: "works",
            to: 'works',
        },
        {
            name: "skills",
            to: 'skills',
        },
    ]

    return (
        <Container>
            <Logo>수연</Logo>
            <Nav>
                {menus.map((item, i) =>
                    <NavItem activeClass="isActive"
                             key={i}
                             to={item.to}
                             // spy={true}
                             // smooth={true}
                             // hashSpy={true}
                             // offset={-70}
                             // duration={500}
                             // delay={1000}
                             // isDynamic={true}
                             // // onSetActive={this.handleSetActive}
                             // // onSetInactive={this.handleSetInactive}
                             // // ignoreCancelEvents={false}
                    >
                        {item.name}
                    </NavItem>
                )}
            </Nav>
            <ButtonMenu>
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
    color: #18f;
  }


`;


const ButtonMenu = styled.div`
  font-size: 24px;
  padding: 10px;
  display: none;


  ${media.lessThan("md")`
    display: flex;
  `};

`;

export default Header;