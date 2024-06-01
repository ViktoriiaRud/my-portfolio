import React from 'react';
import { Link } from 'gatsby';

import { MenuType } from '../../../types/header';

import { StyledLi, TypographyLink, WrapperMenu } from './menu.styles';

const Menu = ({ items }: MenuType) => (
  <WrapperMenu>
    {items.links.map((link) => (
      <StyledLi key={link.title}>
        <Link to={link.url}>
          <TypographyLink html={link.title} variant="title_5" color={"white"} />
        </Link>
      </StyledLi>
    ))}
  </WrapperMenu>
);

export default Menu;
