import React, { FC, HTMLAttributes, ReactChild, ReactChildren } from 'react';
import { Grid } from '..';
import { PaletteType } from '../../tokens/color';
import { ComponentSize } from '../../tokens/sizes';
import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledImage,
  StyledImageRounded,
} from './styled';

export interface ICard {
  bgColor?: PaletteType;
  border?: boolean;
  padding?: ComponentSize;
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

export interface IProductCard extends ICard {
  src: string;
  height?: number;
}

export interface ISideProductCard extends IProductCard {
  imgSize: 'small' | 'default';
}

export const CardHeader: FC<ICard & HTMLAttributes<HTMLDivElement>> = ({
  children,
  bgColor = 'cream',
  padding = 'small',
}) => <StyledCardHeader bgColor={bgColor} padding={padding}>{children}</StyledCardHeader>;

export const CardBody: FC<ICard & HTMLAttributes<HTMLDivElement>> = ({
  children,
  padding = 'small',
}) => <StyledCardBody padding={padding}>{children}</StyledCardBody>;

const Card: FC<ICard & HTMLAttributes<HTMLDivElement>> = ({
  bgColor = 'light',
  border = false,
  children
}) => {
  return (
    <StyledCard bgColor={bgColor} border={border}>
      {children}
    </StyledCard>
  );
};

export const ProductCard: FC<IProductCard & HTMLAttributes<HTMLDivElement>> = ({
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

export const SideProductCard: FC<
  ISideProductCard & HTMLAttributes<HTMLDivElement>
> = ({
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

export const RoundedImg: FC<IProductCard> = ({ height, src }) => (
  <StyledImageRounded height={height} src={src} />
);

export const Img: FC<IProductCard> = ({ height, src }) => (
  <StyledImage height={height} src={src} />
);
export default Card;
