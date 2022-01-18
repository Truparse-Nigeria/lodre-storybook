import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface StyledSmallImageProps {
  selected: boolean;
}

export const StyledImageSelectFlex = styled.div`
  display: flex;
  padding: 10px 5px;
  align-item: center;
  gap: 0.5rem;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${PALETTE.primary};
    outline: 1px solid ${PALETTE.grey};
    border-radius: 15px;
  }
`;
export const StyledSmallImages = styled.img<StyledSmallImageProps>`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  object-fit: cover;
  outline: ${(props) =>
    props.selected ? `2px solid ${PALETTE.primary}` : "none"};
  outline-offset: 1.5px;
  cursor: pointer;
`;

export const StyledSelectedImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
`;
