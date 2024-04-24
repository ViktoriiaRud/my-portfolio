import React from 'react';

import {
    StyledWrapperExperience,
    TypographySubtitleExp,
    TypographySubtitle,
    TypographyDescription,
    TypographyData,
} from './experience.styles';
import Container from "../../atoms/container";


export type ExperienceType = {};

const Experience = ({}: ExperienceType) => {
    return <>
        <Container>
            <StyledWrapperExperience>
                <TypographySubtitleExp html={'Work Experience'} variant="title_3" color={'rosybrownDark'}/>
                <TypographySubtitle html={'For Better Future Soft House'} variant={'title_5'}/>
                <TypographyData html={'( February 2023 - Present )'} variant={'title_4'}/>
                <TypographyDescription variant={'title_7'}>
                    I specialize in React and work on web pages and online stores.
                    <br/>
                    I used design Figma.
                    <br/>
                    Online store project.
                    <br/>
                    I used Magento 2, HTML, Less I did footer, blog, changed styles,
                    changed photos, added products to the store using les csv
                    <TypographyData html={'( 02/2023-05/2023 )'} variant={'title_4'}/>
                    Project Recruitment website
                    I used React, TypeScript. Created icon components.
                    <TypographyData html={'( 05/2023- 06/2023 )'} variant={'title_4'}/>
                    Project IT Company website
                    I used CSS, StyledComponents, React, TypeScript, and Gatsby. I
                    made components and styles. I created a footer, banner, header,
                    button, tooltip menu, drop down menu, ipping cards, carousel
                    slider, and carousel with reviews. Also, I created basic components,
                    such as a container and theme.
                    <TypographyData html={'( 06/2023...)'} variant={'title_4'}/>
                    <br/>
                    <br/>
                </TypographyDescription>
                <TypographySubtitle html={'For Better Future Soft House'} variant={'title_5'}/>
                <TypographyData html={'( October 2022 - February 2023 )'} variant={'title_4'}/>
                <TypographyDescription>
                    Project: “Trip’’ (Landing Page) (10/2022 - 12/2022)
                    <br/>
                    Project: “Restaurant’’ (Landing Page) (12/2022 - 2/2023)
                    <br/>
                    I used technology: CSS, StyledComponents, React, TypeScript</TypographyDescription>
            </StyledWrapperExperience>
        </Container>
    </>
}

export default Experience;