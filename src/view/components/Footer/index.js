import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../Layout/Layout.Styled";

const Footer = () => {

    return (
        <Container>
            <FooterTitle>
                copyright(c) 2021. 서수연 all right reserved.
            </FooterTitle>
        </Container>
    )
}

const Container = styled(ContentContainer)`
  padding: 30px 0;
`;

const FooterTitle = styled.p`
  text-align: center;
  color: #999;
  font-size: 13px;
`;

export default Footer;