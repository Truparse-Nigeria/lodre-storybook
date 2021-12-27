import styled from 'styled-components';
import { PALETTE, PaletteType } from '../../tokens/color';
import { ComponentSize, RADIUS, SIDE_PADDINGS } from '../../tokens/sizes';

type CardType = {
  bgColor: PaletteType;
};

type CardBodyType = {
  padding: ComponentSize;
};

type ImageType = {
    height?: number;
  };

export const StyledCard = styled.div<CardType>`
  border-radius: ${RADIUS.default}px;
  background-color: ${(props) => PALETTE[props.bgColor]};
  overflow: hidden;
`;

export const StyledCardBody = styled.div<CardBodyType>`
  padding: ${(props) => SIDE_PADDINGS[props.padding]}px;
`;

export const StyledImage = styled.img<ImageType>`
  object-fit: cover;
  width: 100%;
  height: ${props => props.height}px;
`;

export const StyledImageRounded = styled(StyledImage)`
  border-radius: ${RADIUS.default}px;
`;
