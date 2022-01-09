import React, { FC, HTMLAttributes, ReactChild, ReactChildren } from 'react';
import { flexAlignmentType } from '../flex/styled';
import { StyledGrid } from './styled';

export interface IGrid {
  children: JSX.Element | JSX.Element[];
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xs?: string;
  gap?: number;
  justifyContent?: flexAlignmentType;
  alignItems?: flexAlignmentType;
}

const Grid: FC<IGrid & HTMLAttributes<HTMLDivElement>> = ({
  children,
  gap = 1,
  md,
  lg,
  xl,
  xs = '1fr',
  sm = 'repeat(2, 1fr)',
  justifyContent = 'start',
  alignItems = 'start',
  ...rest
}) => {
  return (
    <StyledGrid
      gap={gap}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xs={xs}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </StyledGrid>
  );
};

export default Grid;
