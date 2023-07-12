import Timer from "./pages/timer"
import Settings from "./pages/settings";
import "./App.css";

import { useState } from "react";

function App() {
const [showSettings, setShowSettings] = useState(true)
  return (
    <main>
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
