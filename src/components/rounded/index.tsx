import React, { HTMLAttributes, FC, ReactChild, ReactChildren } from 'react'
import { StyledRounded } from './styled'
import { ComponentSize } from '../../tokens/sizes';
import { PaletteType } from '../../tokens/color';

export interface IRounded {
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
  borderRadius?: ComponentSize;
  borderColor?: PaletteType;
}

const Rounded: FC<IRounded & HTMLAttributes<HTMLDivElement>> = ({children, borderColor, borderRadius = "default", ...rest}) => {
  return (
    <StyledRounded borderRadius={borderRadius} borderColor={borderColor} {...rest}>
      {children}
    </StyledRounded>
  )
}

export default Rounded