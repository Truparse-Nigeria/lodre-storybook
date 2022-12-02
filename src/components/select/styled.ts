import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

interface SideSelectFieldProps {
  focused: boolean;
  borderRadius?: string;
  background: PaletteType;
  height?: number;
}

interface Options {
  selected: boolean;
}

export const StyledSelectField = styled.div<SideSelectFieldProps>`
  position: relative;

  .button {
    justify-content: space-between;
    text-align: left !important;
    width: 100%;
    font-weight: ${FONT_WEIGHT.w400};
    border: 1.5px solid ${PALETTE.ash} !important;
    background: ${(props) => PALETTE[props.background]};
    border-radius: ${(props) => props.borderRadius} !important;
    color: ${PALETTE.dark};
    height: 45px;

    .icon {
      justify-self: flex-end;
      margin-left: 25px;
      transform: ${(props) =>
        props.focused ? "rotateZ(180deg)" : "rotateZ(0deg)"};
      transition: all ease-in-out 0.2s;
    }
  }
`;

// box-shadow: ${(props) =>
//   props.height === 0 ? "" : "0 0 7px 2px ${PALETTE.grey}"};

export const StyledOptionsContainer = styled.div<SideSelectFieldProps>`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 60px;
  z-index: 99;
  visibility: ${(props) => (props.focused ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.focused ? "auto" : "none")};
  box-shadow: ${(props) =>
    props.height === 0 ? "" : `0 0 7px 2px ${PALETTE.grey}`};
  background: ${PALETTE.light};
  padding: ${(props) => (props.height === 0 ? "" : "10px 0")};
  height: ${(props) =>
    props.focused ? `${props.height && props.height}px` : "180px"};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${PALETTE.primary};
    border-radius: 15px;
  }
  &.up {
    top: -140px;
  }

  &.down {
    top: 70px;
  }
`;

export const StyledOptions = styled.div<Options>`
  background: ${(props) =>
    props.selected ? `${PALETTE.primary}` : `${PALETTE.light}`};
  padding: 15px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  margin: 0 10px;
  border-radius: 10px;

  :hover {
    background: ${PALETTE.grey};
    transition: all ease-in-out 0.2s;
  }
`;
