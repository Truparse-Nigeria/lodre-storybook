import * as React from "react";
import { SVGProps } from "react";

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.167 4.001h4.166v1.667h-1.666v10.833a.833.833 0 0 1-.834.834H3.167a.834.834 0 0 1-.834-.834V5.668H.667V4.001h4.166v-2.5a.833.833 0 0 1 .834-.833h6.666a.833.833 0 0 1 .834.833v2.5ZM14 5.668H4v10h10v-10Zm-7.5 2.5h1.667v5H6.5v-5Zm3.333 0H11.5v5H9.833v-5ZM6.5 2.335V4h5V2.335h-5Z"
      fill="#8C8C8C"
    />
  </svg>
);

export default SvgTrash;
