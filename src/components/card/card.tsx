import React, { FC, HTMLAttributes, ReactChild, ReactChildren } from 'react';
import { Grid, Rounded } from '..';
import { PaletteType } from '../../tokens/color';
import { ComponentSize } from '../../tokens/sizes';

import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledImage,
  StyledImageRounded,
  StyledProductCardBody,
  StyledSideCardBody,
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
    <Rounded borderColor={bgColor}>
      <StyledCard bgColor={bgColor}>
        <StyledProductCardBody height={height} padding={padding}>
          <StyledImage src={src} />
          <div className="children">{children}</div>
        </StyledProductCardBody>
      </StyledCard>
    </Rounded>
  );
};

export const SideProductCard: FC<
  ISideProductCard & HTMLAttributes<HTMLDivElement>
> = ({
  bgColor = 'cream',
  children,
  padding = 'small',
  src,
  imgSize = 'default',
}) => {
  return (
    <StyledCard bgColor={bgColor}>
      <StyledSideCardBody padding={padding}>
        <Grid
          md={imgSize === 'default' ? '100px 1fr' : '80px 1fr'}
          alignItems="center"
        >
          <StyledImageRounded
            height={imgSize === 'default' ? 100 : 80}
            src={src}
          />
          <div className="children">{children}</div>
        </Grid>
      </StyledSideCardBody>
    </StyledCard>
  );
};

export const RoundedImg: FC<
  IProductCard & HTMLAttributes<HTMLImageElement>
> = ({ height, src, ...rest }) => (
  <StyledImageRounded height={height} src={src} {...rest} />
);

export const Img: FC<IProductCard & HTMLAttributes<HTMLImageElement>> = ({
  height,
  src,
  ...rest
}) => <StyledImage height={height} src={src} {...rest} />;
export default Card;
