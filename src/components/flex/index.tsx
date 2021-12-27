import React, { FC, ReactNode } from 'react';
import { StyledCol, StyledFlex } from './styled';

export interface IFlex {
  children: JSX.Element | JSX.Element[];
  gap?: number;
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-evenly'
    | 'space-between'
    | 'end';
  alignItems?:
    | 'start'
    | 'center'
    | 'space-evenly'
    | 'space-between'
    | 'flex-end';
}

export interface ICol {
  children: ReactNode | JSX.Element | JSX.Element[];
  size?: number;
}

export const Flex: FC<IFlex> = ({
  children,
  gap = 1,
  justifyContent = 'start',
  alignItems = 'start',
  ...rest
}) => {
  return (
    <StyledFlex
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};

export const Col: FC<ICol> = ({ children, size  }) => {
  return <StyledCol size={size}>{children}</StyledCol>;
};
