import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";
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
  padding: 20px 40px;
  cursor: pointer;
  opacity: 0.6;
  background: transparent;
  border: 0;
  outline: 0;
  ${(props) =>
    props.active &&
    `
    border-bottom: 3px solid ${PALETTE.primary};
    opacity: 1;
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
  margin-bottom: ${SIDE_PADDINGS.default}px;
`;

export const TabContainer = styled.div<TabsProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.centered && "center"};
  background: "transparent";
`;
