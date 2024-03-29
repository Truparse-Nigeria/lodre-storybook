import * as React from "react";
import { SVGProps } from "react";
const SvgAddress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2v-3.062ZM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-7 6h14v2H5v-2Z"
      fill="#000"
    />
  </svg>
);
export default SvgAddress;
