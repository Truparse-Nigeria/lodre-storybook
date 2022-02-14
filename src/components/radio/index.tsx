import React, { FC, InputHTMLAttributes } from "react";
import { Paragraph, SmallText } from "..";
import { X } from "../../icons";
import { PaletteType } from "../../tokens/color";
import StyledRadio, {
  StyledColorRadio,
  StyledDismissable,
  StyledRadioContainer,
  StyledRadioText,
} from "./styled";

export interface RadioControlProps {
  label?: string;
  subLabel?: string;
  fullWidth?: boolean;
  forColor?: boolean;
  hexColor?: string;
  dismissable?: boolean;
  dismissableStyle?: {
    background: PaletteType;
    foreground: PaletteType;
  };
  callback?: Function;
}

const Radio: FC<
  RadioControlProps & InputHTMLAttributes<HTMLInputElement & InputEvent>
> = ({
  label,
  subLabel,
  fullWidth,
  forColor,
  hexColor,
  dismissable,
  dismissableStyle,
  callback,
  ...props
}) => {
  return (
    <StyledRadioContainer fullWidth={fullWidth}>
      {dismissable && (
        <StyledDismissable
          background={dismissableStyle?.background}
          foreground={dismissableStyle?.foreground}
          onClick={() => callback && callback()}
        >
          <X width={15} height={15} />
        </StyledDismissable>
      )}
      <StyledRadio type="radio" forColor={forColor} {...props} />
      {forColor && <StyledColorRadio hexColor={hexColor} />}
      <StyledRadioText fullWidth={fullWidth} forColor={forColor}>
        {label && <Paragraph>{label}</Paragraph>}
        <SmallText className="text-ash">{subLabel}</SmallText>
      </StyledRadioText>
    </StyledRadioContainer>
  );
};

export default Radio;
