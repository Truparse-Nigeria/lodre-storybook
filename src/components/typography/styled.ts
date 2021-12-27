import styled from 'styled-components';
import {
  FONT_SIZE,
  FONT_WEIGHT,
  TextType,
  TYPOGRAPHY,
  WeightType,
} from '../../tokens/font';

type Typo = {
  size: TextType;
  weight: WeightType;
  ellipsis?: number;
};

export const StyledSmall = styled.small<Typo>`
  font-size: ${FONT_SIZE.small}px;
  font-weight: ${(props) => FONT_WEIGHT[props.weight]};
  ${(props) =>
    props.ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${props.ellipsis};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    `}
`;

export const StyledParagraph = styled.p<Typo>`
  font-weight: ${(props) => FONT_WEIGHT[props.weight]};
  font-size: ${(props) => FONT_SIZE[props.size]}px;
  ${(props) =>
    props.ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${props.ellipsis};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    `}
`;

export const StyledHeading3 = styled.h3<Typo>`
  font-weight: ${(props) => FONT_WEIGHT[props.weight]};
  font-size: ${(props) => FONT_SIZE[props.size]}px;
  ${(props) =>
    props.ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${props.ellipsis};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    `}
`;

export const StyledHeading4 = styled.h4<Typo>`
  font-weight: ${(props) => FONT_WEIGHT[props.weight]};
  font-size: ${(props) => FONT_SIZE[props.size]}px;
  ${(props) =>
    props.ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${props.ellipsis};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    `}
`;
