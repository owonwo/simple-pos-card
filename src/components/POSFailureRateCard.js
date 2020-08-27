import React from "react";
import t from "prop-types";
import { Moon, Panes, Info, Sun } from "./Icons";
import ProgressBar from "./ProgressBar";

const Card = (props) => {
  const { forMode, isLightMode, toggleMode } = useDarkMode();
  const {
    isLayout,
    mode: layoutMode,
    toggleMode: toggleLayoutMode,
  } = useLayoutMode(props.layoutMode);
  const { direction, percentage } = props.surge;

  return (
    <div
      className={[
        "wgi-card flex flex-col",
        forMode("", "dark"),
        direction,
        layoutMode,
      ].join(" ")}
    >
      <section>
        <header className="flex flex-row justify-between">
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
        </header>

        <div className="percentage flex items-end">
          <p>{props.percentage}</p>
          <span>
            <div className="arrow" />
            {percentage}
          </span>
        </div>

        <div className="p-progress flex-1">
          <ProgressBar
            percentage={props.percentage}
            withHandle={isLayout("compact") || isLayout("full")}
          />
        </div>

        <p className="source flex items-center justify-end">
          <Info width={10} height={10} fill="var(--gray-1)" />
          <span>
            Source <b>NIBSS</b>
          </span>
        </p>
      </section>

      <footer className="flex">
        <button className="flex-1 active">Daily</button>
        <button className="flex-1">Monthly</button>
        <button className="flex-1">Annually</button>
      </footer>
    </div>
  );
};

Card.propTypes = {
  percentage: t.string.isRequired,
  layoutMode: t.oneOf(["minimal", "compact", "full"]),
  surge: t.shape({
    percentage: t.string.isRequired,
    direction: t.oneOf(["up", "down"]).isRequired,
  }).isRequired,
};

const useDarkMode = () => {
  const [mode, setMode] = React.useState(false);
  const toggleMode = () => setMode(!mode);
  const isLightMode = () => mode === false;
  const forMode = (light, dark) => (isLightMode() ? light : dark);

  return { forMode, isLightMode, toggleMode };
};

const useLayoutMode = (preferredMode) => {
  const modes = ["minimal", "compact", "full"];
  const defaultState = preferredMode ? modes.indexOf(preferredMode) : 0;
  const [index, setIndex] = React.useState(defaultState);

  const isLayout = (mode) => mode === modes[index];

  const toggleMode = () => {
    const newMode = index + 1;
    if (newMode > 2) return setIndex(0);
    if (newMode > -1) return setIndex(newMode);
  };

  return { isLayout, toggleMode, mode: modes[index] };
};

export default Card;
