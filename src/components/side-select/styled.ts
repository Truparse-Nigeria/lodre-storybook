import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

interface SideSelectFieldProps {
  focused: boolean;
  borderRadius?: string;
  background: PaletteType;
}

interface Options {
  selected: boolean;
}

export const StyledSideSelectField = styled.div<SideSelectFieldProps>`
  position: relative;

  .button {
    justify-content: space-between;
    text-align: left !important;
    width: 100%;
    font-weight: ${FONT_WEIGHT.w400};
    border: 1.5px solid ${PALETTE.border} !important;
    background: ${(props) => PALETTE[props.background]};
    border-radius: ${(props) => props.borderRadius} !important;

    .icon {
      justify-self: flex-end;
      margin-left: 25px;
      transform: ${(props) =>
        props.focused ? "rotateZ(180deg)" : "rotateZ(0deg)"};
      transition: all ease-in-out 0.2s;
    }
  }

  .dropdown {
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0px;
    visibility: ${(props) => (props.focused ? "visible" : "hidden")};
    pointer-events: ${(props) => (props.focused ? "auto" : "none")};
    box-shadow: 0 0 10px 5px ${PALETTE.grey};
    background: ${PALETTE.light};
    padding: 10px 0;
  }
`;

export const StyledOptions = styled.div<Options>`
  background: ${(props) =>
    props.selected ? `${PALETTE.grey}` : `${PALETTE.light}`};
  padding: 15px;
  cursor: pointer;
`;
