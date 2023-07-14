import PlayButton from "../components/PlayButton";
import PauseButton from "../components/PauseButton";
import ConfigButton from "../components/ConfigButton";
import SettingsContext from "../context/SettingsContext";
import { useContext, useState, useEffect, useRef } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const blue = "#9AC1FF";
const green = "#DAFFA2";

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  const [paused, setPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const secondsLeftRef = useRef(secondsLeft);
  const pausedRef = useRef(paused);
  const modeRef = useRef(mode);

  function switchMode() {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      (nextMode === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (pausedRef.current) {
        return;
      }

      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);

  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          color: "#fff",
          pathColor: mode === "work" ? blue : green,
          trailColor: "rgba(255, 255, 255, .3)",
        })}
      />
      <div className="buttons-wrapper">
        {paused ? (
          <PlayButton
            onClick={() => {
              setPaused(false);
              pausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setPaused(true);
              pausedRef.current = true;
            }}
          />
        )}
      </div>
      <div className="config-btn-container">
        <ConfigButton
          text="Configurações"
          onClick={() => settingsInfo.setShowSettings(true)}
        />
      </div>
    </div>
  );
}

export default Timer;
