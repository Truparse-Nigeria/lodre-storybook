import React, { ElementType, FC, HTMLAttributes, InputHTMLAttributes } from "react";
import { Flex } from "..";
import SvgSearch from "../../icons/Search";
import {
  StyledInputContainer,
  StyledInput,
  StyledInputFlex,
  StyledInputSuffix,
  StyledInputPrefix,
  StyledSearchButton,
  StyledSearchInput,
} from "./styled";

export interface IInput {
  subText?: string;
  trailing?: JSX.Element | ElementType | string;
  leading?: JSX.Element | ElementType | string;
  type: string;
  placeholder: string;
  width?: string;
  margin?: boolean;
  onSubmit?: () => void;
}

const Input: FC<IInput & InputHTMLAttributes<HTMLInputElement>> = ({
  subText,
  trailing,
  leading,
  type,
  placeholder,
  margin = true,
  width = "100%",
  ...rest
}) => {
  return (
    <StyledInputContainer margin={margin}>
      <StyledInputFlex leading={leading} trailing={trailing}>
        {leading && <StyledInputPrefix>{leading}</StyledInputPrefix>}
        <StyledInput
          type={type}
          width={width}
          placeholder={placeholder}
          {...rest}
        />
        {trailing && <StyledInputSuffix>{trailing}</StyledInputSuffix>}
      </StyledInputFlex>
      {subText && <small>{subText}</small>}
    </StyledInputContainer>
  );
};

export const SearchInput: FC<IInput & InputHTMLAttributes<HTMLInputElement>> = ({
  type,
  placeholder,
  onSubmit,
  ...rest
}) => (
  <Flex gap={0}>
    <StyledSearchInput type={type} placeholder={placeholder} {...rest} />
    <StyledSearchButton onClick={() => onSubmit}>
      <SvgSearch width="20" height="20" />
    </StyledSearchButton>
  </Flex>
);

export default Input;
