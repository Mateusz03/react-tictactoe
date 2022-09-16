import { Circle, Cross } from "./Shapes";
import Pools from "./pools";
import "./styles/Game.css";
import { useEffect, useState, createContext } from "react";

export const currentMove = createContext(null);

const Game = () => {
  const [move, setMove] = useState(null);

  useEffect(() => {
    const rng = Math.floor(Math.random() * (2 - 0) + 0);
    setMove(rng);
  }, []);

  const circleStyle = {
    borderBottom: move ? "4px solid #5fd6f7" : "none",
  };

  const crossStyle = {
    borderBottom: !move ? "4px solid #5fd6f7" : "none",
  };

  return (
    <div className="gameContainer">
      <div className="moveContainer">
        <div className="move" style={circleStyle}>
          <Circle />
        </div>
        <div className="move" style={crossStyle}>
          <Cross />
        </div>
      </div>
      <currentMove.Provider value={{ move, setMove }}>
        <Pools />
      </currentMove.Provider>
    </div>
  );
};
export default Game;
