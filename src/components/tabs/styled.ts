import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";
import { SIDE_PADDINGS } from "../../tokens/sizes";

interface TabProps {
  active: boolean;
  foreground?: PaletteType;
}

interface TabsProps {
  centered?: boolean;
  background?: PaletteType;
  foreground?: PaletteType;
  radius?: boolean;
}

export const StyledTabTitle = styled.button<TabProps>`
  font-size: 20px;
  padding: 15px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: 0;
  ${(props) =>
    props.active &&
    `
    border-bottom: 3px solid ${PALETTE.primary};
    & p {
      font-weight: ${FONT_WEIGHT.w700} !important;
    }
  `}
  color: ${(props) =>
    props.foreground ? PALETTE[props.foreground] : PALETTE.dark};
`;

export const TabGroup = styled.div<TabsProps>`
  display: flex;
  flex-direction: row;
  background: ${(props) =>
    props.background ? PALETTE[props.background] : "transparent"};
  border-radius: ${(props) => props.radius && "4px"};
  overflow: hidden;
  overflow-x: auto;
  margin-bottom: ${SIDE_PADDINGS.default}px;
`;

export const TabContainer = styled.div<TabsProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.centered && "center"};
  background: "transparent";
  overflow-x: auto;
`;

export const StyledFullWidthContainer = styled.div`
  width: 100%;
`;
