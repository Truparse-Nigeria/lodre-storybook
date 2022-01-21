import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_SIZE } from "../../tokens/font";
import { HEIGHTS, mediaQueries, SIDE_PADDINGS } from "../../tokens/sizes";

export const StyledNavbar = styled.section`
  background-color: ${PALETTE.light};
  padding: ${SIDE_PADDINGS.default}px ${SIDE_PADDINGS.small}px;
  border-bottom: 1px solid ${PALETTE.grey};
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const StyledGrid = styled.div`
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

  main {
    .nav {
      border-radius: none;
    }
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
