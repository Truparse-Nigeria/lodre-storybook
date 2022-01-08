import * as React from "react";
import { SVGProps } from "react";

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 15.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm.75-6h3v1.5h-4.5V4.25h1.5V8Z"
      fill="#8C8C8C"
    />
  </svg>
);

export default SvgClock;
