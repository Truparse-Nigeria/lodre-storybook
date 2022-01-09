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
  ...rest
}) => (
  <StyledCardHeader bgColor={bgColor} padding={padding} {...rest}>
    {children}
  </StyledCardHeader>
);

export const CardBody: FC<ICard & HTMLAttributes<HTMLDivElement>> = ({
  children,
  padding = 'small',
  ...rest
}) => (
  <StyledCardBody padding={padding} {...rest}>
    {children}
  </StyledCardBody>
);

const Card: FC<ICard & HTMLAttributes<HTMLDivElement>> = ({
  bgColor = 'light',
  border = false,
  children,
  ...rest
}) => {
  return (
    <StyledCard bgColor={bgColor} border={border} {...rest}>
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

export const RoundedImg: FC<IProductCard & HTMLAttributes<HTMLImageElement>> = ({ height, src, ...rest }) => (
  <StyledImageRounded height={height} src={src}  {...rest}/>
);

export const Img: FC<IProductCard> = ({ height, src, ...rest }) => (
  <StyledImage height={height} src={src}   {...rest}/>
);
export default Card;
