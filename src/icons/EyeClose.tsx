import * as React from "react";
import { SVGProps } from "react";

const SvgEyeClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.014 3.957.929 1.873 1.872.93l13.2 13.2-.944.942-2.206-2.206A7.336 7.336 0 0 1 .788 8a7.321 7.321 0 0 1 2.226-4.044Zm6.824 6.825-.976-.976A2 2 0 0 1 6.195 7.14l-.976-.976a3.333 3.333 0 0 0 4.62 4.62ZM5.316 2.508A7.336 7.336 0 0 1 15.213 8a7.298 7.298 0 0 1-1.341 3.061L11.298 8.49a3.333 3.333 0 0 0-3.786-3.787L5.316 2.508Z"
      fill="#191919"
    />
  </svg>
);

export default SvgEyeClose;
