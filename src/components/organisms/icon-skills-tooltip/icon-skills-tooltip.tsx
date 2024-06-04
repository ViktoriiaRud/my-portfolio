import React from 'react';
import {
  IconContainer,
  SmallIcon,
  StyledTooltipDescription,
  StyledTooltipTitle,
  StyledWrapper,
  StyledWrapperTooltip,
  Tooltip,
  StyledWrapperText,
} from './icon-skills-tooltip.styles';

import {IconSkillsTooltipType} from "../../../types/components";
import Icon from "../../atoms/icon";
import {TypographySubtitleKb, TypographyTitle} from "../project-card/project-card.styles";

const IconSkillsTooltip = ({  icons }: IconSkillsTooltipType) => (
  <StyledWrapper>
      <StyledWrapperText>
          <TypographyTitle html={'Skills'} variant="title_6" />
          <TypographySubtitleKb html={'I use at work'} variant="title_3" color={'white'}/>
      </StyledWrapperText>
    <StyledWrapperTooltip>
      {icons
        ? icons.map((icon) => (
            <IconContainer key={icon.name}>
              <Icon name={icon.name} />
              <Tooltip>
                <SmallIcon name={icon.name} />
                <StyledTooltipTitle html={icon.title} variant="title_5" color={'orange'} />
                <StyledTooltipDescription html={icon.description} variant="body6" />
              </Tooltip>
            </IconContainer>
          ))
        : null}
    </StyledWrapperTooltip>
  </StyledWrapper>
);

export default IconSkillsTooltip;