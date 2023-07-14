import SettingsContext from "../context/SettingsContext";
import BackButton from "../components/BackButton";
import ReactSlider from "react-slider";
import { useContext } from "react";
import "../slider.css";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="label-wrapper">
      <div className="focus-container">
        <label>Focus time: {settingsInfo.workMinutes}:00</label>
        <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          value={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          min={1}
          max={60}
        />
      </div>
      <div className="break-container">
        <label>Break time: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider
          className="slider green"
          thumbClassName="thumb"
          trackClassName="track"
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={30}
        />
      </div>
      <BackButton
        text="Voltar"
        onClick={() => settingsInfo.setShowSettings(false)}
      />
    </div>
  );
}

export default Settings;
