import React, { ReactChild } from 'react';
import { Flex, Paragraph } from '..';
import { StyledNavItem, StyledNavItemContainer } from './styled';

interface ProfileNavItemProps {
  active?: boolean;
  icon?: SVGElement | JSX.Element;
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
          <Paragraph weight={active ? 'w600' : 'w400'}>{children}</Paragraph>
        </Flex>
      </StyledNavItem>
    </StyledNavItemContainer>
  );
};

export default ProfileNavItem;
