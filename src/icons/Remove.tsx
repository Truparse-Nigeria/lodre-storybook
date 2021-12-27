import * as React from "react";
import { SVGProps } from "react";

const SvgRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.167 5.001h4.166v1.667h-1.666v10.833a.833.833 0 0 1-.834.834H4.167a.834.834 0 0 1-.834-.834V6.668H1.667V5.001h4.166v-2.5a.833.833 0 0 1 .834-.833h6.666a.833.833 0 0 1 .834.833v2.5ZM15 6.668H5v10h10v-10Zm-7.5 2.5h1.667v5H7.5v-5Zm3.333 0H12.5v5h-1.667v-5ZM7.5 3.335V5h5V3.335h-5Z"
      fill="#8C8C8C"
    />
  </svg>
);

export default SvgRemove;
