import React from 'react';


import {StylesWrapperFooter} from './footer.styles';
import Container from "../../atoms/container";
import FooterCopyright from "../../molecules/footer-copyright";
import {dataFooterCopyright} from "../../../data/data-footer";
// import {StyledSpanCopyright} from "../../molecules/footer-copyright/footer-copyright.styles";

const Footer = () => (
    <StylesWrapperFooter>
        {/*<StyledSpanCopyright/>*/}
        <Container>
            <FooterCopyright {...dataFooterCopyright} />
        </Container>
    </StylesWrapperFooter>
);

export default Footer;
