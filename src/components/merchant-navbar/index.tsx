import React, { FC, ReactChild, ReactChildren } from "react";
import { Card, Grid } from "..";

import { StyledGrid, StyledMain, StyledNavbar } from "./styled";

export interface INavbar {
  nav?: JSX.Element | JSX.Element[];
  logo?: JSX.Element;
  sideNavSize?: number;
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
  navChildren?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

const MerchantNavbar: FC<INavbar> = ({
  logo,
  nav,
  sideNavSize = 250,
  children,
  navChildren,
}) => {
  return (
    <div>
      <StyledNavbar>
        <StyledGrid>
          <div>{logo}</div>
          <div>{nav}</div>
        </StyledGrid>
      </StyledNavbar>
      <StyledMain>
        <Grid
          xl={`${sideNavSize}px auto`}
          lg={`${sideNavSize}px auto`}
          md={`${sideNavSize}px auto`}
        >
          <Card className="nav">{navChildren}</Card>
          <>{children}</>
        </Grid>
      </StyledMain>
    </div>
  );
};

export default MerchantNavbar;
