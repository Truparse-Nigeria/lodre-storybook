import * as React from "react";
import { SVGProps } from "react";

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9 13.695-5.29 2.961 1.182-5.946L.44 6.594l6.02-.714L9 .375l2.54 5.505 6.02.714-4.451 4.116 1.18 5.946L9 13.695Z"
      fill="#E4E4E4"
    />
  </svg>
);

export default SvgStar;
