import React from "react";
import { Moon, Panes, Info, Sun } from "./Icons";

const Card = (props) => {
  // use dark mode
  const { forMode, isLightMode, toggleMode } = useDarkMode();
  const { isLayout, toggleMode: toggleLayoutMode } = useLayoutMode();

  return (
    <div
      className={[
        "wgi-card flex flex-col",
        forMode("", "dark"),
        props.surge.direction,
      ].join(" ")}
      direction={props.surge.direction}
    >
      <section className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="wgi-caption">POS FAILURE RATE</div>
          <div>
            <button
              title="Expand Card"
              className="ghost-btn"
              onClick={toggleLayoutMode}
            >
              <Panes width={15} height={15} fill="var(--gray-2)" />
            </button>
            <button
              title="Toggle Color Scheme"
              className="ghost-btn"
              onClick={toggleMode}
            >
              {isLightMode() ? (
                <Moon width={15} height={15} fill="var(--gray-2)" />
              ) : (
                <Sun width={15} height={15} fill="var(--gray-2)" />
              )}
            </button>
          </div>
        </div>
        <div className="percentage flex items-end">
          <p>{props.percentage}</p>
          <span>
            <div className="arrow" />
            {props.surge.percentage}
          </span>
        </div>
        {(isLayout("compact") || isLayout("full")) && (
          <p className="source flex items-center justify-end">
            <Info width={10} height={10} fill="var(--gray-1)" />
            <span>
              Source <b>NIPSS</b>
            </span>
          </p>
        )}
      </section>
      {isLayout("full") && (
        <footer className="flex">
          <button className="flex-1 active">Daily</button>
          <button className="flex-1">Monthly</button>
          <button className="flex-1">Annually</button>
        </footer>
      )}
    </div>
  );
};

const useDarkMode = () => {
  const [mode, setMode] = React.useState(false);
  const toggleMode = () => setMode(!mode);
  const isLightMode = () => mode === false;
  const forMode = (light, dark) => (isLightMode() ? light : dark);

  return { forMode, isLightMode, toggleMode };
};

const useLayoutMode = () => {
  const modes = ["minimal", "compact", "full"];
  const [modeIndex, setIndex] = React.useState(1);
  const isLayout = (mode) => mode === modes[modeIndex];
  const toggleMode = () => {
    const newMode = modeIndex + 1;
    console.log("newMode", newMode);
    if (newMode > 2) return setIndex(0);
    if (newMode > -1) return setIndex(newMode);
  };

  return { isLayout, toggleMode };
};

export default Card;
