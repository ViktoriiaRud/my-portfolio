import React from 'react';

import DropdownMenu from "../../molecules/dropdown-menu";

import {
    StyledColorHeader,
    StyledWrapperHeader,
    StyledLogo,
    StyledDropdownMenuMobile, StyledWrapperButton, StyledButtonWidth, StyledButtonNav
} from './my-header.styles';
import Container from "../../atoms/container";
import {Link} from "gatsby";
import {
    dataDropdownMenu,
    dataHeader,
} from "../../../data/data-header";

import Button from "../../atoms/button";

export type MyHeaderType = {
    srcImage?: {};
    altText: string;
    url: string;
    urlAboutMe: string;
    titleAboutMe: string;
};

const MyHeader = () => {
    return <>
        <StyledColorHeader>
            <Container>
                <StyledWrapperHeader>
                    <StyledLogo>
                        <Link to={dataHeader.url}/>
                        <img src={dataHeader.srcImage} alt={dataHeader.altText}/>
                    </StyledLogo>
                    <StyledButtonNav>
                        <nav>
                          <DropdownMenu {...dataDropdownMenu}/>
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
    </>
};

export default MyHeader;