import styled from 'styled-components';
import { PALETTE, PaletteType } from '../../tokens/color';
import {
  ComponentSize,
  mediaQueries,
  RADIUS,
  SIDE_PADDINGS,
} from '../../tokens/sizes';

type CardType = {
  bgColor: PaletteType;
  border?: boolean;
};

type CardBodyType = {
  padding: ComponentSize;
  imgSize?: ComponentSize;
};

type CardProductBodyType = {
  padding: ComponentSize;
  height?: number;
};

type CardHeaderType = {
  padding: ComponentSize;
  bgColor: PaletteType;
};

type ImageType = {
  height?: number;
};

export const StyledCard = styled.div<CardType>`
  border-radius: ${RADIUS.default}px;
  background-color: ${(props) => PALETTE[props.bgColor]};
  ${(props) =>
    props.border &&
    `
  border: 1px solid ${PALETTE.border}
  `}
`;

export const StyledCardBody = styled.div<CardBodyType>`
  padding: 0.6rem;

  ${mediaQueries('md')(`
    padding: ${SIDE_PADDINGS.default}px;
    `)}
`;

export const StyledProductCardBody = styled.div<CardProductBodyType>`
  & img {
    height: 165px;
  }

  & .children {
    padding: 0.6rem;
    ${mediaQueries('md')(`
      padding: ${SIDE_PADDINGS.default}px;
    `)}

    & p,
    & s {
      font-size: 12px;
    }
  }

  ${(props) =>
    props.height &&
    mediaQueries('sm')(`
    & img {
      height: ${props.height}px;
    }

    `)}
`;

export const StyledSideCardBody = styled.div<CardBodyType>`
  padding: 0px;
  & img {
    border-radius: ${RADIUS.default}px ${RADIUS.default}px 0 0;
    height: 165px;
  }

  & .children {
    padding-top: 0;
    padding: 0 0.6rem 0.6rem 0.6rem;
    ${mediaQueries('md')(`
      padding: ${SIDE_PADDINGS.default}px;
    `)}


    & p,
    & s {
      font-size: 12px;
    }
  }

  ${(props) =>
    props.padding &&
    mediaQueries('sm')(`
    padding: ${SIDE_PADDINGS[props.padding]}px;

    & img {
      border-radius: ${RADIUS.default}px;
      height: ${props.imgSize === 'default' ? '100px' : '80px'};
    }

    & .children {
      padding: 0px;
    }
    `)}
`;

export const StyledCardHeader = styled.div<CardHeaderType>`
  padding: ${(props) => SIDE_PADDINGS[props.padding]}px;
  background-color: ${(props) => PALETTE[props.bgColor]};
`;

export const StyledImage = styled.img<ImageType>`
  object-fit: cover;
  width: 100%;
  ${(props) =>
    props.height &&
    `
    height: ${props.height}px
  `}
`;

export const StyledImageRounded = styled(StyledImage)`
  border-radius: ${RADIUS.default}px;
  border: 1px solid ${PALETTE.cream};
`;
