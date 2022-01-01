import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
import { FONT_SIZE } from '../../tokens/font';
import { HEIGHTS, mediaQueries, SIDE_PADDINGS } from '../../tokens/sizes';

export const StyledNavbar = styled.section`
  background-color: ${PALETTE.light};
  padding: ${SIDE_PADDINGS.small}px 0;
  border-bottom: 1px solid ${PALETTE.grey};
  position: sticky;
  top: 0;
`;

export const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 2rem;
  & div:first-child,
  & div:last-child {
    display: none;
  }
  ${mediaQueries('lg')(`
    grid-template-columns: 0.6fr 1.6fr 1fr;
    & div:first-child, & div:last-child {
        display:block;
    }
    `)}
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

export const StyledSearchButton = styled.button`
  border-radius: 0 4px 4px 0;
  height: ${HEIGHTS.inputs.default}px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${PALETTE.primary};
  background: ${PALETTE.primary};
`;

export const StyledBottomNav = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 65px;
  display: block;
  ${mediaQueries('lg')(`
  display: none;
  `)}
`;
