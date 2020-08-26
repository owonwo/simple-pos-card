import React from "react";
import t from "prop-types";

const ProgressBar = (props) => {
  return (
    <div className="wgi-progress-bar">
      <span style={{ width: props.percentage }}></span>
      {props.withHandle && (
        <span className="handle" style={{ left: props.percentage }} />
      )}
    </div>
  );
};

ProgressBar.defaultProps = {
  withHandle: t.boolean,
};

export default ProgressBar;
