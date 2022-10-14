import * as React from "react";
import { SVGProps } from "react";
const SvgStarCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <circle cx={8} cy={8} r={8} fill="#FFC20E" />
    <path
      d="m8 10.5-2.939 1.795.799-3.35-2.615-2.24 3.433-.275L8 3.25l1.322 3.18 3.434.275-2.616 2.24.799 3.35L8 10.5Z"
      fill="#fff"
    />
  </svg>
);
export default SvgStarCircle;
