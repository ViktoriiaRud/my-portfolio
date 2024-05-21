import React from 'react';

import DropdownMenu from "../../molecules/dropdown-menu";

import {
    StyledColorHeader,
    StyledWrapperHeader,
    StyledLogo,
    StyledDropdownMenuMobile,
} from './my-header.styles';
import Container from "../../atoms/container";
import {Link} from "gatsby";
import {
    dataDropdownMenu,
    dataHeader,
} from "../../../data/data-header";

export type MyHeaderType = {
    srcImage?: string;
    altText: string;
    url: string;
};

const MyHeader = () => {
    return <>
        <StyledColorHeader>
            <Container>
                <StyledWrapperHeader>
                    <StyledLogo>
                        <Link to={dataHeader.url}/>
                        <img src={dataHeader.srcImage} alt={dataHeader.altText}/>
                        <nav>
                            <StyledDropdownMenuMobile>
                                <DropdownMenu {...dataDropdownMenu}/>
                            </StyledDropdownMenuMobile>
                        </nav>
                    </StyledLogo>
                </StyledWrapperHeader>
            </Container>
        </StyledColorHeader>
    </>
};

export default MyHeader;