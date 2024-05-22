import React from 'react';
import Container from "../../atoms/container";

import {
    StyledWrapperAboutClient,
    StyledWrapperContact,
    StyledWrapperTitle,
    TypographyDescription,
    TypographySubtitle,
    TypographyTitle,
   WrapperAboutClient,
    StyledLinkAboutMe,
} from "./about-me.styles";
import {Link} from "gatsby";
import ButtonDoubleBlue from "../../molecules/button-double-blue";
import {dataButtonDoubleBlue} from "../../../data/data-page";



export type AboutMeType = {
};

const AboutMe = ({subtitle, titleAboutMe, altText, title, url, srcImage, description}: AboutMeType) => {
    return <>
        <WrapperAboutClient>
            <Container>
                <StyledWrapperAboutClient>
                    <StyledWrapperTitle>
                        <TypographySubtitle html={subtitle} variant="title" color={'greenyellow'}/>
                        <TypographyTitle html={title} variant="title_1"/>
                        <TypographyDescription html={description} variant="title_2"/>
                        <ButtonDoubleBlue {...dataButtonDoubleBlue}/>
                    </StyledWrapperTitle>
                    <StyledWrapperContact>
                        <img src={srcImage} alt={altText}/>
                    </StyledWrapperContact>
                </StyledWrapperAboutClient>
            </Container>
        </WrapperAboutClient>
    </>
}


export default AboutMe;