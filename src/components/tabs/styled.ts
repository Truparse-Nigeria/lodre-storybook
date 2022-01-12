import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface TabProps {
  active: boolean;
}

interface TabsProps {
  centered?: boolean;
}

export const StyledTabTitle = styled.button<TabProps>`
  font-size: 20px;
  padding: 10px 40px;
  margin-bottom: 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${(props) =>
    props.active &&
    `
    border-bottom: 3px solid ${PALETTE.primary};
    opacity: 1;
  `}
`;

export const TabGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabContainer = styled.div<TabsProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.centered && "center"};
`;
