import React from 'react';
import {StylesWrapperFooter} from './footer.styles';
import Container from "../../atoms/container";
import FooterCopyright from "../../molecules/footer-copyright";
import {dataFooterCopyright} from "../../../data/data-footer";


const Footer = () => {
    return <>
    <StylesWrapperFooter>
        <Container>
        <FooterCopyright {...dataFooterCopyright} />
        </Container>
    </StylesWrapperFooter>
    </>
}

export default Footer;