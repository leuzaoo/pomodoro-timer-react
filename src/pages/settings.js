import ReactSlider from "react-slider";
import "../slider.css";

function Settings() {
  return (
    <div className="label-wrapper">
      <label>Focus time: </label>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={45}
        min={1}
        max={120}
      />
      <label>Break time: </label>
      <ReactSlider
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={45}
        min={1}
        max={120}
      />
    </div>
  );
}

export default Settings;
