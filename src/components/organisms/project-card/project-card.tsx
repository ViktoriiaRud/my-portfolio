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
    TypographySubtitleKb
} from './project-card.styles';

import {StyledWrapperButton} from "../../atoms/button/button.styles";
import {ProjectCardType} from "../../../types/components";

const ProjectCard = ({contentCard}:ProjectCardType) => {
    const [isShown, setIsShown] = useState<number | null>(null);
    return (
        <WrapperProjectCard>
            <Container>
                <TypographySubtitleKb html={'My projects'} variant="title_3" color={'rosybrownDark'}/>
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
                                                    <StyledContentText>
                                                        <TypographyTitleFront html={card.title} variant="title_6" />
                                                    </StyledContentText>
                                                <TypographyTitleDescription html={card.description} variant="title_5" />
                                                <StyledButtonWidth>
                                                    <StyledWrapperButton>
                                                        <Button variant="rosybrownDark" size="sm" href={card.hrefButton}>
                                                            {card.titleButton}
                                                        </Button>
                                                    </StyledWrapperButton>
                                                </StyledButtonWidth>
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
