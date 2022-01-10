import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

export interface HRProps {
  colorValue?: string;
}

export const StyledHr = styled.hr<HRProps>`
  border-top: 1px solid
    ${(props) => (props.colorValue ? props.colorValue : PALETTE.dark)};
`;
