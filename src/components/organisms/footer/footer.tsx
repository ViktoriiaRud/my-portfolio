import React from 'react';


import { StylesWrapperFooter } from './footer.styles';
import Container from "../../atoms/container";
import FooterCopyright from "../../molecules/footer-copyright";
import {dataFooterCopyright} from "../../../data/data-footer";

const Footer = () => (
  <Container>
    <StylesWrapperFooter>
    </StylesWrapperFooter>
    <FooterCopyright {...dataFooterCopyright} />
  </Container>
);

export default Footer;
