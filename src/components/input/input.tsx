import React, { ElementType, FC, HTMLAttributes } from 'react';
import { Flex } from '..';
import { EyeClose } from '../../icons';
import SvgSearch from '../../icons/Search';
import {
  StyledInputContainer,
  StyledInput,
  StyledInputFlex,
  StyledInputSuffix,
  StyledInputPrefix,
  StyledSearchButton,
  StyledSearchInput,
} from './styled';

export interface IInput {
  subText?: string;
  trailing?: ElementType | string;
  leading?: ElementType | string;
  type: string;
  placeholder: string;
  width?: string;
  onSubmit?: () => void;
}

const Input: FC<IInput & HTMLAttributes<HTMLInputElement>> = ({
  subText,
  trailing,
  leading,
  type,
  placeholder,
  width = '100%',
  ...rest
}) => {
  return (
    <StyledInputContainer>
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

export const SearchInput: FC<IInput & HTMLAttributes<HTMLInputElement>> = ({
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
