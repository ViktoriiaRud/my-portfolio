import React, { useState } from 'react';

import Button from '../../atoms/button';
import Container from '../../atoms/container';
import {
    Card,
    StyledContainerCard,
    StyledButtonWidth,
    StyledContentBack,
    StyledContentFront,
    StyledContentText,
    StyledImgCard,
    StyledWrapperCard,
    TypographyTitleDescription,
    TypographyTitleFront,
    WrapperProjectCard,
    TypographySubtitleKb,
    TypographyTitle,
    StyledWrapperButtonGray,
    StyledWrapperContentText,
} from './project-card.styles';

import {ProjectCardType} from "../../../types/components";

const ProjectCard = ({contentCard}:ProjectCardType) => {
    const [isShown, setIsShown] = useState<number | null>(null);
    return (
        <WrapperProjectCard>
            <Container>
                <TypographyTitle html={'Portfolio'} variant="title_6"/>
                <TypographySubtitleKb html={'My projects'} variant="title_3" color={'orange'}/>
                <StyledWrapperCard>
                    <StyledContainerCard>
                        {contentCard.cards
                            ? contentCard.cards.map((card, index) => (
                                <Card
                                    key={`${card}`}
                                    onMouseEnter={() => setIsShown(index)}
                                    onMouseLeave={() => setIsShown(null)}
                                >
                                    {isShown !== index && (
                                        <div>
                                            <StyledContentBack>
                                                <StyledImgCard>
                                                    <img src={card.srcImage} alt={card.altText} />
                                                </StyledImgCard>
                                            </StyledContentBack>
                                        </div>
                                    )}
                                    {isShown === index && (
                                        <div>
                                            <StyledContentFront>
                                                <StyledWrapperContentText>
                                                    <StyledContentText>
                                                        <TypographyTitleFront html={card.title} variant="title_6" color={'blueDark6'} />
                                                    </StyledContentText>
                                                    <TypographyTitleDescription html={card.description} variant="title_5" />
                                                </StyledWrapperContentText>
                                                <StyledWrapperButtonGray>
                                                <StyledButtonWidth>
                                                        <Button variant="gray" size="sm" href={card.hrefButton}>
                                                            {card.titleButton}
                                                        </Button>
                                                </StyledButtonWidth>
                                            </StyledWrapperButtonGray>
                                            </StyledContentFront>
                                        </div>
                                    )}
                                </Card>
                            ))
                            : null}
                    </StyledContainerCard>
                </StyledWrapperCard>
            </Container>
        </WrapperProjectCard>
    );
};

export default ProjectCard;
