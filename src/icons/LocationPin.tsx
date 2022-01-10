import * as React from "react";
import { SVGProps } from "react";

const SvgLocationPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7 14.675 3.713-3.713a5.25 5.25 0 1 0-7.425 0L7 14.675Zm0 2.12-4.773-4.772a6.75 6.75 0 1 1 9.546 0L7 16.796ZM6.25 6.5V4.25h1.5V6.5H10V8H7.75v2.25h-1.5V8H4V6.5h2.25Z"
      fill="#8C8C8C"
    />
  </svg>
);

export default SvgLocationPin;
