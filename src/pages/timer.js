import PlayButton from "../components/PlayButton";
import PauseButton from "../components/PauseButton";
import ConfigButton from "../components/ConfigButton";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const red = "#ff0000";

function Timer() {
  const percentage = 50;
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          color: "#fff",
          pathColor: red,
          trailColor: "rgba(255, 255, 255, .3)",
        })}
      />
      <div className="buttons-wrapper">
        <PlayButton />
        <PauseButton />
      </div>
      <div className="config-btn-container">
        <ConfigButton text="Configurações" />
      </div>
    </div>
  );
}

export default Timer;
