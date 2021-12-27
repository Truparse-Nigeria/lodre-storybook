import React, { FC, ReactNode } from 'react';
import { StyledContainer } from './styled';

export interface IContainer {
  children: ReactNode | JSX.Element | JSX.Element[];
  fluid?: boolean
}

const Container: FC<IContainer> = ({children, fluid = false, ...rest}) => {
  return <StyledContainer fluid={fluid} {...rest}>{children}</StyledContainer>;
};

export default Container;
