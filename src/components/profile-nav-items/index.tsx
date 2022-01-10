import React, { ReactChild } from "react";
import { Flex } from "..";
import { StyledNavItem, StyledNavItemContainer } from "./styled";

interface ProfileNavItemProps {
  active?: boolean;
  icon: SVGElement;
  children: ReactChild | ReactChild[];
}

const ProfileNavItem = ({
  active,
  icon,
  children,
  ...props
}: ProfileNavItemProps) => {
  return (
    <StyledNavItemContainer active={active}>
      <StyledNavItem {...props}>
        <Flex alignItems="center">
          <>{icon}</>
          <>{children}</>
        </Flex>
      </StyledNavItem>
    </StyledNavItemContainer>
  );
};

export default ProfileNavItem;
