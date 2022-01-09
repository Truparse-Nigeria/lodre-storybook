import styled from 'styled-components';
import { mediaQueries } from '../../tokens/sizes';
import { flexAlignmentType } from '../flex/styled';

export type GridType = {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xs?: string;
  gap: number;
  justifyContent: flexAlignmentType;
  alignItems: flexAlignmentType;
};

export const StyledGrid = styled.div<GridType>`
  display: grid !important;
  grid-template-columns: ${props => props.xs || '1fr'}; 
  gap: ${(props) => props.gap}rem;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  

  ${(props) =>
    props.sm &&
    mediaQueries('sm')(
      `
      grid-template-columns: ${props.sm}; 
      display: grid; 
      `
    )}
  ${(props) =>
    props.md &&
    mediaQueries('md')(
      `
      grid-template-columns: ${props.md}; 
      display: grid;
      `
    )}
  ${(props) =>
    props.lg &&
    mediaQueries('lg')(
      `
      grid-template-columns: ${props.lg}; 
      display: grid;
      `
    )}
  ${(props) =>
    props.xl &&
    mediaQueries('xl')(
      `
      grid-template-columns: ${props.xl}; 
      display: grid;
      `
    )}
    
`;
