import SettingsContext from "./context/SettingsContext";
import Settings from "./pages/settings";
import Timer from "./pages/timer";
import { useState } from "react";

import "./App.css";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(50);
  const [breakMinutes, setBreakMinutes] = useState(10);
  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          workMinutes,
          breakMinutes,
          setShowSettings,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
