import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { flexAlignmentType, StyledCol, StyledFlex, textAlignmentType } from './styled';

export interface IFlex {
  children: JSX.Element | JSX.Element[];
  gap?: number;
  justifyContent?: flexAlignmentType;
  alignItems?: flexAlignmentType;
}

export interface ICol {
  children: ReactNode | JSX.Element | JSX.Element[] ;
  size?: number;
  align?: textAlignmentType;
}

export const Flex: FC<IFlex & HTMLAttributes<HTMLDivElement>> = ({
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

export const Col: FC<ICol> = ({ children, size, align  }) => {
  return <StyledCol align={align} size={size}>{children}</StyledCol>;
};
