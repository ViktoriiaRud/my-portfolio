import React from 'react';

import Container from '../../atoms/container';

import {
    StyledTypographyDescription,
    StyledWrapperImg,
    WrapperAboutMeExperience,
    StyledWrapperTitle,
    TypographySubtitle,
    TypographyTitle,
    StyledWrapperAboutMeExperience,
} from './about-me-experience.styles.ts';
import {AboutMeExperienceType} from "../../../types/components";


const AboutMeExperience = ({
                               subtitle,
                               description,
                               description2,
                               description3,
                               description4,
                               title,
                               srcImage,
                               altText,
                           }: AboutMeExperienceType) => (
    <WrapperAboutMeExperience>
        <Container>
            <StyledWrapperAboutMeExperience>
                <StyledWrapperImg>
                    <img src={srcImage} alt={altText}/>
                </StyledWrapperImg>
                <StyledWrapperTitle>
                    <TypographySubtitle html={subtitle} variant="title_6"/>
                    <TypographyTitle html={title} variant="title_3" color={'orange'}/>
                    <StyledTypographyDescription variant="description">
                        {description}
                        <span className="bold">{description2}</span>
                        {description3}
                        <br/>
                        <br/>
                        {description4}
                    </StyledTypographyDescription>
                </StyledWrapperTitle>
            </StyledWrapperAboutMeExperience>
        </Container>
    </WrapperAboutMeExperience>
);

export default AboutMeExperience;