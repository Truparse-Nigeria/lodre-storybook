import React, { FC, ReactChild, ReactChildren } from "react";
import { Card, Grid } from "..";

import { StyledGrid, StyledNavbar } from "./styled";

export interface INavbar {
  nav?: JSX.Element | JSX.Element[];
  logo?: JSX.Element;
  sideNavSize?: number;
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

const MerchantNavbar: FC<INavbar> = ({
  logo,
  nav,
  sideNavSize = 250,
  children,
}) => {
  return (
    <div>
      <StyledNavbar>
        <StyledGrid>
          <div>{logo}</div>
          <div>{nav}</div>
        </StyledGrid>
      </StyledNavbar>
      <main>
        <Grid
          xl={`${sideNavSize}px auto`}
          lg={`${sideNavSize}px auto`}
          md={`${sideNavSize}px auto`}
        >
          <Card className="nav">Hello</Card>
          <>{children}</>
        </Grid>
      </main>
    </div>
  );
};

export default MerchantNavbar;
