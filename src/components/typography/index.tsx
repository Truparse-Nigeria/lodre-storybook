import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { TextType, WeightType } from '../../tokens/font';
import {
  StyledHeading3,
  StyledHeading4,
  StyledParagraph,
  StyledSmall,
} from './styled';

export interface IProps {
  children: ReactNode;
  size?: TextType;
  weight?: WeightType;
  ellipsis?: number;
}

export const SmallText: FC<IProps & HTMLAttributes<HTMLElement>> = ({
  children,
  ellipsis,
  size = 'small',
  weight = 'w400',
  ...rest
}) => {
  return (
    <StyledSmall ellipsis={ellipsis} size={size} weight={weight} {...rest}>
      {children}
    </StyledSmall>
  );
};

export const Paragraph: FC<IProps & HTMLAttributes<HTMLElement>> = ({
  children,
  size = 'pSmall',
  ellipsis,
  weight = 'w400',
  ...rest
}) => {
  return (
    <StyledParagraph ellipsis={ellipsis} size={size} weight={weight} {...rest}>
      {children}
    </StyledParagraph>
  );
};

export const Heading: FC<IProps & HTMLAttributes<HTMLElement>> = ({
  children,
  ellipsis,
  size = 'pSmall',
  weight = 'w400',
  ...rest
}) => {
  switch (size) {
    case 'hLarge':
      return (
        <StyledHeading3
          ellipsis={ellipsis}
          size={size}
          weight={weight}
          {...rest}
        >
          {children}
        </StyledHeading3>
      );
    case 'hSmall':
      return (
        <StyledHeading4
          ellipsis={ellipsis}
          size={size}
          weight={weight}
          {...rest}
        >
          {children}
        </StyledHeading4>
      );
    default:
      return (
        <StyledHeading3 size={size} weight={weight} {...rest}>
          {children}
        </StyledHeading3>
      );
  }
};
