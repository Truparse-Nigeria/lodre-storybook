import React, { Children, FC, ReactChild, ReactChildren } from 'react';
import { Grid } from '..';
import { PALETTE, PaletteType } from '../../tokens/color';
import { ComponentSize, SIDE_PADDINGS } from '../../tokens/sizes';
import { StyledCard, StyledCardBody, StyledImage, StyledImageRounded } from './styled';

export interface ICard {
  bgColor?: PaletteType;
  padding?: ComponentSize;
  children: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

export interface IProductCard extends ICard {
  src: string;
  height?: number;
}

export interface ISideProductCard extends IProductCard {
  imgSize: 'small' | 'default';
}

const Card: FC<ICard> = ({
  bgColor = 'light',
  children,
  padding = 'small',
}) => {
  return (
    <StyledCard bgColor={bgColor}>
      <StyledCardBody padding={padding}>{children}</StyledCardBody>
    </StyledCard>
  );
};

export const ProductCard: FC<IProductCard> = ({
  bgColor = 'light',
  children,
  padding = 'small',
  src,
  height = 215,
}) => {
  return (
    <StyledCard bgColor={bgColor}>
      <StyledImage height={height} src={src} />
      <StyledCardBody padding={padding}>{children}</StyledCardBody>
    </StyledCard>
  );
};

export const SideProductCard: FC<ISideProductCard> = ({
  bgColor = 'light',
  children,
  padding = 'small',
  src,
  height,
  imgSize = 'default',
}) => {
  return (
    <StyledCard bgColor={bgColor}>
      <StyledCardBody padding={padding}>
        <Grid md={imgSize === 'default' ? '100px 1fr' : '80px 1fr'}>
          <StyledImageRounded height={height} src={src} />
          <div>{children}</div>
        </Grid>
      </StyledCardBody>
    </StyledCard>
  );
};

export default Card;
