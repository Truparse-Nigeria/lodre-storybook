import React, { ElementType, FC, ReactChild, ReactChildren } from 'react';
import { Col, Container, Flex, Grid, Paragraph } from '..';
import SvgCart from '../../icons/Cart';
import SvgHelp from '../../icons/Help';
import SvgSearch from '../../icons/Search';
import SvgUser from '../../icons/User';
import {
  StyledBottomNav,
  StyledGrid,
  StyledNavbar,
  StyledSearchButton,
  StyledSearchInput,
} from './styled';

export interface INavbar {
  search?: JSX.Element;
  nav?: JSX.Element[];
  logo?: JSX.Element;
  bottomNav?: JSX.Element[];
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

const Navbar: FC<INavbar> = ({ logo, nav, search, bottomNav, children }) => {
  return (
    <div>
      <StyledNavbar>
        <Container>
          <StyledGrid>
            <div>{logo}</div>
            {search}
            <div>{nav}</div>
          </StyledGrid>
        </Container>
      </StyledNavbar>
      <main>{children}</main>
      <StyledBottomNav>{bottomNav}</StyledBottomNav>
    </div>
  );
};

export default Navbar;
