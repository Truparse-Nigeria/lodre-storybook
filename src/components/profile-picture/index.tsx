import React, { FC } from "react";
import { PALETTE } from "../../tokens/color";
import { StyledProfilePicture, StyledProfilePictureProps } from "./styled";

export interface ProfilePictureProps {
  source: string;
  altText: string;
}

const ProfilePicture: FC<StyledProfilePictureProps & ProfilePictureProps> = ({
  size = 70,
  state = "primary",
  source,
  altText,
  ...props
}) => {
  return (
    <StyledProfilePicture size={size} state={state} {...props}>
      <img src={source} alt={altText} />
    </StyledProfilePicture>
  );
};

export default ProfilePicture;
