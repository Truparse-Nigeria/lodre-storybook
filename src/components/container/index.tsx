import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { PaletteType } from '../../tokens/color';
import { StyledContainer } from './styled';

export interface IContainer {
  children: ReactNode | JSX.Element | JSX.Element[];
  fluid?: boolean;
  bgColor?: PaletteType;
}

const Container: FC<IContainer & HTMLAttributes<HTMLDivElement>> = ({
  children,
  fluid = false,
  bgColor,
  ...rest
}) => {
  return (
    <StyledContainer fluid={fluid} bgColor={bgColor} {...rest}>
      {children}
    </StyledContainer>
  );
};

export default Container;
