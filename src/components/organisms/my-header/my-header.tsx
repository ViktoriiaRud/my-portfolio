import React from 'react';

import {
    StyledColorHeader,
    StyledWrapperHeader,
    StyledLogo,
} from './my-header.styles';
import Container from "../../atoms/container";
import {Link} from "gatsby";
import {dataHeader} from "../../../data/data-header";

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
                    </StyledLogo>
                </StyledWrapperHeader>
            </Container>
        </StyledColorHeader>
    </>
};

export default MyHeader;