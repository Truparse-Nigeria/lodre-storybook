import React, { FC } from "react";
import { X } from "../../icons";
import {
  StyledDimissableImageContainer,
  StyledDismissable,
  StyledDismissableImage,
} from "./styled";

interface DimissableImageProps {
  src: string;
  id: string;
  dismissable: boolean;
  removeImage: (id: string) => void;
}

const DimissableImage: FC<DimissableImageProps> = ({
  src,
  dismissable,
  removeImage,
  id,
}) => {
  return (
    <StyledDimissableImageContainer>
      <StyledDismissableImage src={src} />
      {dismissable && (
        <StyledDismissable type="button" onClick={() => removeImage(id)}>
          <X width={15} height={15} />
        </StyledDismissable>
      )}
    </StyledDimissableImageContainer>
  );
};

export default DimissableImage;
