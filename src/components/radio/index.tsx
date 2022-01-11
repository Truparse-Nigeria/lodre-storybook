import React, { FC, HTMLAttributes, InputHTMLAttributes } from 'react';
import { Paragraph, SmallText } from '..';
import StyledRadio, {
  StyledColorRadio,
  StyledRadioContainer,
  StyledRadioText,
} from './styled';

export interface RadioControlProps {
  label?: string;
  subLabel?: string;
  fullWidth?: boolean;
  forColor?: boolean;
  hexColor?: string;
}

const Radio: FC<RadioControlProps & HTMLAttributes<HTMLInputElement>> = ({
  label,
  subLabel,
  fullWidth,
  forColor,
  hexColor,
  ...props
}) => {
  return (
    <StyledRadioContainer fullWidth={fullWidth}>
      <StyledRadio type="radio" forColor={forColor} {...props} />
      {forColor && <StyledColorRadio hexColor={hexColor} />}
      <StyledRadioText fullWidth={fullWidth} forColor={forColor}>
        <Paragraph>{label}</Paragraph>
        <SmallText className="text-ash">{subLabel}</SmallText>
      </StyledRadioText>
    </StyledRadioContainer>
  );
};

export default Radio;
