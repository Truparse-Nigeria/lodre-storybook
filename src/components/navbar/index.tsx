import React, { FC, ReactChild, ReactChildren } from 'react';
import { Container } from '..';
import { StyledBottomNav, StyledGrid, StyledNavbar } from './styled';

export interface INavbar {
  search?: JSX.Element;
  nav?: JSX.Element | JSX.Element[];
  logo?: JSX.Element;
  bottomNav?: JSX.Element | JSX.Element[];
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
  fluid?: boolean;
}

const Navbar: FC<INavbar> = ({ logo, nav, search, bottomNav, children, fluid = false }) => {
  return (
    <div>
      <StyledNavbar>
        <Container fluid={fluid}>
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
