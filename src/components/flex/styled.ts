import styled from 'styled-components';

type colType = {
  size?: number;
};

type flexType = {
  gap: number;
  justifyContent: 'start' | 'center' | 'space-evenly' | 'space-between' | 'end';
  alignItems:
    | 'start'
    | 'center'
    | 'space-evenly'
    | 'space-between'
    | 'flex-end';
};

export const StyledFlex = styled.div<flexType>`
    display: flex;
    gap: ${(props) => props.gap}rem;
    justify-content: ${(props) => props.justifyContent};
    align-items:${(props) => props.alignItems};
`;

export const StyledCol = styled.div<colType>`
  flex: ${(props) => props.size};
`;
