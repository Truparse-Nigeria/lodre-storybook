import * as React from "react";
import { SVGProps } from "react";
const SvgCheckGreenCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M9 16.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM8.252 12l5.303-5.303-1.06-1.06-4.243 4.242L6.13 7.757l-1.06 1.06L8.252 12Z"
      fill="#5BB630"
    />
  </svg>
);
export default SvgCheckGreenCircle;
