import React, { FC, ReactChild, ReactChildren } from 'react';
import { StyledGrid } from './styled';

export interface IGrid {
  children: JSX.Element | JSX.Element[];
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xs?: string;
  gap?: number;
}

const Grid: FC<IGrid> = ({
  children,
  gap = 1,
  md,
  lg,
  xl,
  xs = '1fr',
  sm = 'repeat(2, 1fr)',
  ...rest
}) => {
  return (
    <StyledGrid gap={gap} sm={sm} md={md} lg={lg} xl={xl} xs={xs} {...rest}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
