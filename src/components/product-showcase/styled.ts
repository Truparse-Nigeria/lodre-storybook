import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface StyledSmallImageProps {
  selected: boolean;
}

interface StyledSelectedImageProps {
  height?: string;
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

export const StyledSelectedImage = styled.img<StyledSelectedImageProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "400px")};
  border-radius: 10px;
  object-fit: cover;
`;

export const StyledSelectedImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;

  .left {
    position: absolute;
    left: 5px;
    min-width: 20px !important;
    height: 20px;
    padding: 0 !important;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 50% !important;

    svg {
      path {
        fill: ${PALETTE.light};
      }
    }
  }

  .right {
    position: absolute;
    right: 5px;
    min-width: 20px !important;
    height: 20px;
    padding: 0 !important;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 50% !important;

    svg {
      path {
        fill: ${PALETTE.light};
      }
    }
  }
`;

export const StyledIndicatorsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
`;

export const StyledIndicators = styled.div<StyledSmallImageProps>`
  width: 10px;
  height: 10px;
  background: ${(props) =>
    props.selected ? `${PALETTE.light}` : `rgba(0, 0, 0, 0.1)`};
  border: 1px solid ${PALETTE.light};
  border-radius: 50%;
  margin: 0 2.5px;
  cursor: pointer;
`;
