import React, { FC, ReactChild, ReactChildren, useState } from "react";
import { Flex, Grid } from "..";
import { MenuLine, X } from "../../icons";

import { StyledGrid, StyledMain, StyledNavbar, StyledSideNav } from "./styled";

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
  sideNavSize,
  children,
  navChildren,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <StyledNavbar>
        <StyledGrid>
          <Flex alignItems="center">
            <MenuLine
              width={24}
              height={24}
              className="menu-icon"
              onClick={() => setOpen(!open)}
            />
            <>{logo}</>
          </Flex>

          <div>{nav}</div>
        </StyledGrid>
      </StyledNavbar>
      <StyledMain>
        <Grid
          className="main"
          xl={`${sideNavSize}px 1fr`}
          lg={`${sideNavSize}px 1fr`}
          md={`${sideNavSize}px 1fr`}
          sm="1fr"
        >
          <StyledSideNav width={sideNavSize} open={open}>
            <Flex justifyContent="end">
              <>
                {open && (
                  <X width={18} height={18} onClick={() => setOpen(false)} />
                )}
              </>
            </Flex>
            {navChildren}
          </StyledSideNav>
          <>{children}</>
        </Grid>
      </StyledMain>
    </div>
  );
};

export default MerchantNavbar;
