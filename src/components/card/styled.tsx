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
  padding: ${(props) => SIDE_PADDINGS[props.padding]}px;
`;

export const StyledProductCardBody = styled.div<CardProductBodyType>`
  & img {
    height: 100px;
  }

  & .children {
    padding: ${(props) => SIDE_PADDINGS[props.padding]}px;

    & p,
    & s {
      font-size: 12px;
    }
  }

  ${(props) =>
    props.height &&
    mediaQueries('md')(`
    & img {
      height: ${props.height}px;
    }

    `)}
`;

export const StyledSideCardBody = styled.div<CardBodyType>`
  padding: 0px;
  & img {
    border-radius: ${RADIUS.default}px ${RADIUS.default}px 0 0;
  }

  & .children {
    padding: ${(props) => SIDE_PADDINGS[props.padding]}px;
    padding-top: 0;

    & p,
    & s {
      font-size: 12px;
    }
  }

  ${(props) =>
    props.padding &&
    mediaQueries('md')(`
    padding: ${SIDE_PADDINGS[props.padding]}px;

    & img {
      border-radius: ${RADIUS.default}px;
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
  ${(props) => props.height && (`
    height: ${props.height}px
  `)}
`;

export const StyledImageRounded = styled(StyledImage)`
  border-radius: ${RADIUS.default}px;
  border: 1px solid ${PALETTE.cream};
`;
