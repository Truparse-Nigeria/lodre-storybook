import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

export interface StyledNavItemProps {
  active?: boolean;
}

export const StyledNavItemContainer = styled.div<StyledNavItemProps>`
  margin: 0;
  background-color: ${(props) =>
    props.active ? PALETTE.primary_light : "none"};
  color: ${(props) => (props.active ? PALETTE.primary : PALETTE.dark)};
  border-right: ${(props) =>
    props.active ? `4px solid ${PALETTE.primary}` : `none`};

  svg {
    path {
      fill: ${(props) => (props.active ? PALETTE.primary : PALETTE.dark)};
    }
  }
`;

export const StyledNavItem = styled.li<StyledNavItemProps>`
  display: flex;
  align-items: center;
  padding: 25px 20px;
  margin: 0;
  height: 40px;
  text-decoration: none;
  list-style-type: none;
`;
