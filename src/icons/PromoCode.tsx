import * as React from "react";
import { SVGProps } from "react";

const SvgPromoCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 18a1.5 1.5 0 0 0-3 0H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h5a1.5 1.5 0 0 0 3 0h10a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V17a1 1 0 0 1-1 1H9ZM7.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill="#000"
    />
  </svg>
);

export default SvgPromoCode;
