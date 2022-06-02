import { ElementType } from "react";
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_SIZE } from "../../tokens/font";
import { HEIGHTS, RADIUS } from "../../tokens/sizes";

type InputType = {
  width: string;
};

type InputFlexType = {
  trailing?: JSX.Element | ElementType | String;
  leading?: JSX.Element | ElementType | String;
};

type InputContainerType = {
  margin: boolean;
};

export const StyledInput = styled.input<InputType>`
  border-radius: ${RADIUS.small}px;
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
  position: relative;
  display: flex;
  align-items: center;
  ${(props) =>
    props.trailing != null
      ? `& > input {
    padding-right: 55px !important;
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
  left: 30px;
  position: absolute;
`;

export const StyledInputSuffix = styled.div`
  position: absolute;
  right: 20px;
`;

export const StyledInputContainer = styled.div<InputContainerType>`
  margin-bottom: ${(props) => (props.margin ? "20px" : "0px")};
`;

export const StyledSearchInput = styled.input`
  border-radius: ${RADIUS.small}px 0 0 ${RADIUS.small}px;
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
  border-radius: 0 ${RADIUS.small}px ${RADIUS.small}px 0;
  height: ${HEIGHTS.inputs.default}px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${PALETTE.primary};
  background: ${PALETTE.primary};
  pointer: cursor;
`;
