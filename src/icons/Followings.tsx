import * as React from "react";
import { SVGProps } from "react";

const SvgFollowings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 16.5v10H0a10 10 0 0 1 10-10Zm7.5 9.375-3.674 1.931.701-4.09-2.97-2.897 4.107-.598L17.5 16.5l1.837 3.721 4.107.598-2.971 2.897.7 4.09-3.673-1.931ZM10 15.25a7.498 7.498 0 0 1-7.5-7.5c0-4.144 3.356-7.5 7.5-7.5s7.5 3.356 7.5 7.5-3.356 7.5-7.5 7.5Z"
      fill="#191919"
    />
  </svg>
);

export default SvgFollowings;
