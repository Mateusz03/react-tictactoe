import { Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Game from "./components/Game";
import Restart from "./components/Restart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game" element={<Game />} />
      <Route path="/restart/:winner" element={<Restart />} />
    </Routes>
  );
}

export default App;
