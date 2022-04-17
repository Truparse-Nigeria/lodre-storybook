import React, { FC, ReactNode, useRef } from 'react';
import { More } from '../../icons';
import { StyledMenu, StyledMenuContainer, StyledMenuTrigger } from './styled';
import { useDetectOutsideClick } from './useDetectOutsideClick';

export interface IMenu {
    children: ReactNode;
}

const Menu:FC<IMenu>  = ({children}) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <StyledMenuContainer>
      <StyledMenuTrigger onClick={onClick}>
        <More />
      </StyledMenuTrigger>
      <StyledMenu
        ref={dropdownRef}
        toggle={isActive}
      >
        {children}
      </StyledMenu>
    </StyledMenuContainer>
  );
};

export default Menu;
