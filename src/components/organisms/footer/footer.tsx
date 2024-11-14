import React, { useEffect, useState }  from 'react';
import {StylesWrapperFooter} from './footer.styles';
import Container from "../../atoms/container";
import FooterCopyright from "../../molecules/footer-copyright";
import {dataFooterCopyright} from "../../../data/data-footer";
import Preloader from '../../molecules/pre-loader';


const Footer = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, [])

    return <>
    {
        isLoading ? <Preloader/> : 
    <StylesWrapperFooter>
        <Container>
        <FooterCopyright {...dataFooterCopyright} />
        </Container>
    </StylesWrapperFooter>
    }
    </>
}

export default Footer;