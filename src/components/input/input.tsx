import React, { ElementType, FC } from 'react';
import { EyeClose } from '../../icons';
import {
  StyledInputContainer,
  StyledInput,
  StyledInputFlex,
  StyledInputSuffix,
  StyledInputPrefix,
} from './styled';

export interface IInput {
  subText?: string;
  trailing?: ElementType | string;
  leading?: ElementType | string;
  type: string;
  placeholder: string;
  width?: string;
}

const Input: FC<IInput & Record<string, any>> = ({
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

export default Input;
