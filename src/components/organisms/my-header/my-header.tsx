import React from 'react';

import {
    StyledColorHeader,
    StyledWrapperHeader,
    StyledLogo, StyledDropdownMenuDesktop, StyledDropdownMenuMobile,
} from './my-header.styles';
import Container from "../../atoms/container";
import {Link} from "gatsby";
import {dataDropdownMenu, dataHeader} from "../../../data/data-header";
import DropdownMenu from "../../molecules/dropdown-menu";
import MyHamburgerMenu from "../../molecules/hamburger";

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
                            <StyledDropdownMenuDesktop>
                                <DropdownMenu {...dataDropdownMenu} />
                            </StyledDropdownMenuDesktop>
                            <StyledDropdownMenuMobile>
                                <MyHamburgerMenu dataDropdownMenu={dataDropdownMenu}/>
                            </StyledDropdownMenuMobile>
                        </nav>
                    </StyledLogo>
                </StyledWrapperHeader>
            </Container>
        </StyledColorHeader>
    </>
};

export default MyHeader;