import React, { ReactChild, useState } from "react";
import StyledRadioButton, {
  StyledRadioContainer,
  StyledRadioLabel,
} from "./styled";

export interface RadioProps {
  label: string;
}

const Radio = ({ label }: RadioProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <StyledRadioContainer>
      <StyledRadioButton
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <StyledRadioLabel />
      <small>{label}</small>
    </StyledRadioContainer>
  );
};

export default Radio;
