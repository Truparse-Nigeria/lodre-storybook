import styled from "styled-components";

export interface StyledBadgeProps {
  borderColor?: string;
  fillColor?: string;
  color?: string;
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  padding: 5px 10px;
  border-radius: 10px;
  outline: 2px solid ${(props) => props.borderColor};
  outline-offset: 0px;
  background: ${(props) => props.fillColor};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
