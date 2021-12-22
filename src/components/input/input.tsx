import React, { FC } from "react";
import { EyeClose } from "../../icons";
import {
  StyledInputContainer,
  StyledInput,
  StyledInputFlex,
  StyledInputPrefix,
  StyledInputSuffix,
} from "./styled";

export interface IInput {
  subText?: string;
  suffix?: SVGElement | string;
  prefix?: SVGElement | string;
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
  width = "100%",
  ...rest
}) => {
  return (
    <StyledInputContainer>
      <StyledInputFlex>
        {prefix && <StyledInputPrefix>{prefix}</StyledInputPrefix>}
        <StyledInput
          type={type}
          width={width}
          placeholder={placeholder}
          {...rest}
        />
        {suffix && <StyledInputSuffix>{suffix}</StyledInputSuffix>}
      </StyledInputFlex>
      {subText && <small>{subText}</small>}
    </StyledInputContainer>
  );
};

export default Input;
