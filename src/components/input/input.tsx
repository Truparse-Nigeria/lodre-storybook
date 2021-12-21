import React, { FC } from 'react';
import { EyeClose } from '../../icons';
import { StyledInputContainer, StyledInput, StyledInputFlex } from './styled';

export interface IInput {
  subText?: string;
  suffix?: string;
  prefix?: string;
  type: string;
  placeholder: string;
  width?: string;
}

const Input: FC<IInput & Record<string, any>> = ({
  subText,
  suffix,
  prefix,
  type,
  placeholder,
  width = '100%',
  ...rest
}) => {
  return (
    <StyledInputContainer>
      <StyledInputFlex>
        <EyeClose />
        <StyledInput
          type={type}
          width={width}
          placeholder={placeholder}
          {...rest}
        />
      </StyledInputFlex>
      {subText && <small>{subText}</small>}
    </StyledInputContainer>
  );
};

export default Input;
