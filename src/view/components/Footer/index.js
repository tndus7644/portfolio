import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../Layout/Layout.Styled";

const Footer = () => {

    return (
        <Container>
            <FooterTitle>
                copyright(c) 2023. Suyeon Seo all right reserved.
            </FooterTitle>
        </Container>
    )
}

const Container = styled(ContentContainer)`
    padding: 100px 0 30px 0;
`;

const FooterTitle = styled.p`
  text-align: center;
  color: #999;
  font-size: 13px;
`;

export default Footer;