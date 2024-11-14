import React, { useEffect, useState } from 'react';
import Container from "../../atoms/container";
import {Link} from "gatsby";
import Button from "../../atoms/button";
import {dataMenu} from "../../../data/data-page";
import Menu from "../../molecules/menu";
import Preloader from '../../molecules/pre-loader';

import {dataHeader} from "../../../data/data-header";

import {
    StyledColorHeader,
    StyledWrapperHeader,
    StyledLogo,
    StyledButtonWidth,
    StyledButtonNav
} from './my-header.styles';

export type MyHeaderType = {
    srcImage?: {};
    altText: string;
    url: string;
    urlAboutMe: string;
    titleAboutMe: string;
};

const MyHeader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, [])
    return <>
    {
        isLoading ? <Preloader/> : 
        <StyledColorHeader>
            <Container>
                <StyledWrapperHeader>
                    <StyledLogo>
                        <Link to={dataHeader.url}/>
                        <img src={dataHeader.srcImage} alt={dataHeader.altText}/>
                    </StyledLogo>
                    <StyledButtonNav>
                        <nav>
                            <Menu {...dataMenu}/>
                        </nav>
                        <div>
                        <StyledButtonWidth>
                                <Button variant="blue" size="sm" href={dataHeader.urlAboutMe}>
                                    {dataHeader.titleAboutMe}
                                </Button>
                        </StyledButtonWidth>
                        </div>
                    </StyledButtonNav>
                </StyledWrapperHeader>
            </Container>
        </StyledColorHeader>
    }
    </>
};

export default MyHeader;