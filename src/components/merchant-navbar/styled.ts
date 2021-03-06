import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_SIZE } from "../../tokens/font";
import {
  HEIGHTS,
  mediaQueries,
  SIDE_PADDINGS,
  VIEWPORT,
} from "../../tokens/sizes";

interface SideNavProps {
  width?: number;
  open: boolean;
}

export const StyledNavbar = styled.section`
  background-color: ${PALETTE.light};
  padding: ${SIDE_PADDINGS.small/2}px ${SIDE_PADDINGS.small}px;
  border-bottom: 1px solid ${PALETTE.grey};
  position: sticky;
  top: 0;
  z-index: 999;

  ${mediaQueries('lg')(`
    padding: ${SIDE_PADDINGS.small}px;
    `)}
`;

export const StyledGrid = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr;
  gap: 2rem;
  & div:first-child,
  & div:last-child {
    display: none;
  }
  ${mediaQueries("lg")(`
    grid-template-columns: 0.6fr auto;
    & div:first-child, & div:last-child {
        display:block;
    }
    `)}

  .menu-icon {
    display: none;
    cursor: pointer;

    @media (max-width: ${VIEWPORT.md}px) {
      display: initial;
    }
  }
`;

export const StyledMain = styled.main`
  position: relative;
`;

export const StyledSideNav = styled.div<SideNavProps>`
  border-radius: 0px !important;
  padding: 10px 0;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  width: ${(props) => props.width}px;
  background: ${PALETTE.light};
  position: sticky;

  @media (max-width: ${VIEWPORT.sm}px) {
    position: fixed;
    top: 0;
    overflow-x: hidden;
    left: ${(props) => (props.open ? `0%` : `-${VIEWPORT.sm}px`)};
    transition: all ease-in-out 0.3s;
    z-index: 9999;
  }

  @media (max-width: ${VIEWPORT.md}px) {
    position: fixed;
    top: 0;
    overflow-x: hidden;
    left: ${(props) => (props.open ? `0%` : `-${VIEWPORT.md}px`)};
    transition: all ease-in-out 0.3s;
    z-index: 9999;
  }
`;

export const StyledSearchInput = styled.input`
  border-radius: 4px 0 0 4px;
  height: ${HEIGHTS.inputs.default}px;
  padding: 0 20px;
  width: 100%;
  border: 2px solid ${PALETTE.primary};
  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${PALETTE.ash};
    font-size: ${FONT_SIZE.pSmall};
  }
`;
