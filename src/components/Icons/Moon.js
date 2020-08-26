import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M11.926 10.113A7.313 7.313 0 014.932.663a7.31 7.31 0 1010.05 8.775c-.957.444-2 .674-3.056.675z"
        fill={props.fill}
      />
    </svg>
  );
}

export default SvgComponent;
