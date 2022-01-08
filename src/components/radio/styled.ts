import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface StyledRadioProps {
  checked: boolean;
}

export const StyledRadio = styled.input.attrs({ type: "radio" })`
  margin: 0 5px;
`;

export default StyledRadio;
