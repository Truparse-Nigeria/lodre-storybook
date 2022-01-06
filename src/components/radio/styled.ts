import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface StyledRadioProps {
  checked: boolean;
}

export const StyledRadioContainer = styled.label`
  display: flex;
  align-items: center;
`;

export const StyledRadio = styled.input.attrs({ type: "radio" })`
  margin: 0 5px;
`;

export const StyledRadioText = styled.small`
  margin: 0 5px;
`;

export default StyledRadio;
