import { ElementType } from 'react';
import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
import { FONT_SIZE, TYPOGRAPHY } from '../../tokens/font';
import { HEIGHTS } from '../../tokens/sizes';

type InputType = {
  width: string;
};

type InputFlexType = {
  trailing?: ElementType | String;
  leading?: ElementType | String;
};

export const StyledInput = styled.input<InputType>`
  border-radius: 4px;
  border: 1px solid ${PALETTE.ash};
  height: ${HEIGHTS.inputs.default}px;
  padding: 0 20px;
  width: ${(props) => props.width};

  &:focus {
    outline: 2px solid ${PALETTE.primary};
  }

  &::placeholder {
    color: ${PALETTE.ash};
    font-size: ${FONT_SIZE.pSmall};
  }
`;

export const StyledInputFlex = styled.div<InputFlexType>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.trailing != null
      ? `& > input {
    padding-right: 40px !important;
  } `
      : ``}
  ${(props) =>
    props.leading != null
      ? `& > input {
    padding-left: 40px !important;
  }`
      : ``}
`;

export const StyledInputPrefix = styled.div`
  left: 40px;
  position: absolute;
`;

export const StyledInputSuffix = styled.div`
  margin-left: 40px;
  position: absolute;
  right: 40px;
`;

export const StyledInputContainer = styled.div`
  margin-bottom: 20px;
`;


export const StyledSearchInput = styled.input`
  border-radius: 4px 0 0 4px;
  height: ${HEIGHTS.inputs.default}px;
  padding: 0 20px;
  width: 100%;
  border: 2px solid ${PALETTE.primary};
  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${PALETTE.ash};
    font-size: ${FONT_SIZE.pSmall};
  }
`;

export const StyledSearchButton = styled.button`
  border-radius: 0 4px 4px 0;
  height: ${HEIGHTS.inputs.default}px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${PALETTE.primary};
  background: ${PALETTE.primary};
`;