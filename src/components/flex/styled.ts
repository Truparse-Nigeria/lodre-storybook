import styled from 'styled-components';

export type flexAlignmentType =
  | 'start'
  | 'center'
  | 'space-evenly'
  | 'space-between'
  | 'end';
export type textAlignmentType = 'left' | 'right' | 'center';

type colType = {
  size?: number;
  align?: textAlignmentType;
};

type flexType = {
  gap: number;
  justifyContent: flexAlignmentType;
  alignItems: flexAlignmentType;
};

export const StyledFlex = styled.div<flexType>`
  display: flex !important;
  gap: ${(props) => props.gap}rem;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const StyledCol = styled.div<colType>`
  flex: ${(props) => props.size};
  ${(props) => props.align && `
    text-align: ${props.align};
  `}
`;
