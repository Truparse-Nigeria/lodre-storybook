import React, { FC, ReactChild, ReactChildren } from "react";

import { StyledGrid, StyledNavbar } from "./styled";

export interface INavbar {
  nav?: JSX.Element | JSX.Element[];
  logo?: JSX.Element;
  bottomNav?: JSX.Element | JSX.Element[];
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

const MerchantNavbar: FC<INavbar> = ({ logo, nav, bottomNav, children }) => {
  return (
    <div>
      <StyledNavbar>
        <StyledGrid>
          <div>{logo}</div>
          <div>{nav}</div>
        </StyledGrid>
      </StyledNavbar>
      <main>{children}</main>
    </div>
  );
};

export default MerchantNavbar;
