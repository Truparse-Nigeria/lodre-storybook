import * as React from "react";
import { SVGProps } from "react";

const SvgSafe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8 0 7.298 2.28a1 1 0 0 1 .702.955V5h2a1 1 0 0 1 1 1v2H6V6a1 1 0 0 1 1-1h7V3.97L8 2.094 2 3.97v7.404a4 4 0 0 0 1.558 3.169l.189.136L8 17.58 11.782 15H7a1 1 0 0 1-1-1v-4h13v4a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L8 20l-5.38-3.668A6 6 0 0 1 0 11.374V3.235a1 1 0 0 1 .702-.954L8 0Z"
      fill="#191919"
    />
  </svg>
);

export default SvgSafe;
