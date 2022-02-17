import React, { HTMLAttributes, FC, ReactChild, ReactChildren } from 'react'
import { StyledRounded } from './styled'
import { ComponentSize } from '../../tokens/sizes';

export interface IRounded {
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
  borderRadius?: ComponentSize;
}

const Rounded: FC<IRounded & HTMLAttributes<HTMLDivElement>> = ({children, borderRadius = "default", ...rest}) => {
  return (
    <StyledRounded borderRadius={borderRadius} {...rest}>
      {children}
    </StyledRounded>
  )
}

export default Rounded