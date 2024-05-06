import React, { useState } from 'react';

import DropdownMenu from '../dropdown-menu';

import { StyledHamburger, StyledHamburgerMenu } from './hamburger.styles';

const MyHamburgerMenu = ({ dataDropdownMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHamburger>
      <StyledHamburgerMenu
        isOpen={isOpen}
        menuClicked={handleClick}
        width={30}
        height={20}
        strokeWidth={3}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
      {isOpen && <DropdownMenu {...dataDropdownMenu} />}
    </StyledHamburger>
  );
};

export default MyHamburgerMenu;
