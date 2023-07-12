import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./components/PlayButton";

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
      <div>
        <PlayButton />
      </div>
    </div>
  );
}

export default Timer;
