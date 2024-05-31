import React from 'react';
import Container from "../../atoms/container";

import {
    StyledWrapperAboutMe,
    StyledWrapperImg,
    StyledWrapperTitle,
    TypographySubtitle,
    TypographyTitle,
    WrapperAboutMe,
} from "./about-me.styles";

import ButtonDoubleBlue from "../../molecules/button-double-blue";
import {dataButtonDoubleBlue} from "../../../data/data-page";

export type AboutMeType = {
};

const AboutMe = ({subtitle, altText, title, srcImage}: AboutMeType) => {
    return <>
        <WrapperAboutMe>
            <Container>
                <StyledWrapperAboutMe>
                    <StyledWrapperTitle>
                        <TypographySubtitle html={subtitle} variant="title_1" color={'white'}/>
                        <TypographyTitle html={title} variant="title" color={'white'}/>
                        <ButtonDoubleBlue {...dataButtonDoubleBlue}/>
                    </StyledWrapperTitle>
                    <StyledWrapperImg>
                        <img src={srcImage} alt={altText}/>
                    </StyledWrapperImg>
                </StyledWrapperAboutMe>
            </Container>
        </WrapperAboutMe>
    </>
}


export default AboutMe;