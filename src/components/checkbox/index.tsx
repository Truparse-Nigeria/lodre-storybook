import React, { FC, HTMLAttributes, InputHTMLAttributes } from 'react';
import { SmallText } from '..';
import StyledCheckbox, { StyledCheckboxContainer } from './styled';

export interface CheckboxControlProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox: FC<CheckboxControlProps> = ({ label, ...props }) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox type="checkbox" {...props} />
      {'  '}
      <SmallText>{label}</SmallText>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
