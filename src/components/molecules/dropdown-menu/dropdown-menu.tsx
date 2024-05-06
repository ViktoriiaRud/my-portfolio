import React, { useState } from 'react';
import { Link } from 'gatsby';

import { DropdownMenuType } from '../../../types/header';

import {
  ButtonDropdown,
  StyledContentDropdown,
  StyledDropdownMenu,
  StyledLi,
  TypographyLink,
  WrapperDropdownMenu,
} from './dropdown-menu.styles';

const DropdownMenu = ({ dropdownItems }: DropdownMenuType) => {
  const [isShown, setIsShown] = useState(Array(dropdownItems.items.length).fill(false));

  const toggleDropdown = (index: number) => {
    const updatedOpenState = isShown.map((value, i) => (i === index ? !value : false));
    setIsShown(updatedOpenState);
  };

  return (
    <WrapperDropdownMenu>
      <StyledContentDropdown>
        {dropdownItems
          ? dropdownItems.items.map((item, index) => (
              <div
                key={`${item}`}
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={() => toggleDropdown(index)}
              >
                <ButtonDropdown isActive={isShown[index]}>{item.button}</ButtonDropdown>
                {isShown[index] && (
                  <StyledDropdownMenu>
                    {item.links.map((link) => (
                      <StyledLi key={link.title}>
                        <Link to={link.url}>
                          <TypographyLink html={link.title} variant="title7" />
                        </Link>
                      </StyledLi>
                    ))}
                  </StyledDropdownMenu>
                )}
              </div>
            ))
          : null}
      </StyledContentDropdown>
    </WrapperDropdownMenu>
  );
};

export default DropdownMenu;
