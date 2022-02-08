import React, { FC, ReactChild, ReactChildren } from "react";
import { StyledBottomNav, StyledGrid, StyledNavbar } from "./styled";

export interface INavbar {
  search?: JSX.Element;
  nav?: JSX.Element | JSX.Element[];
  logo?: JSX.Element;
  bottomNav?: JSX.Element | JSX.Element[];
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

const Navbar: FC<INavbar> = ({ logo, nav, search, bottomNav, children }) => {
  return (
    <div>
      <StyledNavbar>
        <StyledGrid>
          <div>{logo}</div>
          {search}
          <div>{nav}</div>
        </StyledGrid>
      </StyledNavbar>
      <main>{children}</main>
      <StyledBottomNav>{bottomNav}</StyledBottomNav>
    </div>
  );
};

export default Navbar;
