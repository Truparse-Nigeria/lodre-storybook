import React, { FC, ReactChild, ReactChildren } from 'react';
import { PaletteType } from '../../tokens/color';
import { StyledIcon } from './styled';

export interface IIcon {
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
  bgColor?: PaletteType;
  height?: number;
  width?: number;
}

export const Icon: FC<IIcon> = ({
  children,
  bgColor = 'primary',
  width = 24,
  height = 24,
}) => {
  return (
    <StyledIcon bgColor={bgColor} width={width} height={height}>
      {children}
    </StyledIcon>
  );
};
