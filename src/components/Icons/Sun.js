import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9 12.375a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z"
        fill={props.fill}
      />
      <path
        d="M9 1.125v2.25M9 14.625v2.25M16.876 9h-2.25M3.376 9h-2.25M14.569 3.432l-1.591 1.59M5.023 12.978l-1.591 1.59M14.569 14.569l-1.591-1.591M5.023 5.023L3.432 3.432"
        stroke={props.fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
