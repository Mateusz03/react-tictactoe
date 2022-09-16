import { useState } from "react";
import { Cross, Circle } from "./Shapes";
import { currentMove } from "./Game";
import "./styles/Pool.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let usedValues = [];

const Pool = (props) => {
  const { move, setMove } = useContext(currentMove);
  const navigate = useNavigate();
  const [shape, setShape] = useState("");

  const combinations = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (winningCombinations[i][j] === props.value) {
          if (move) winningCombinations[i][j] = "O";
          else if (!move) winningCombinations[i][j] = "X";
        }
      }
    }
  };

  const winnerVerification = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      if (
        winningCombinations[i][0] === "X" &&
        winningCombinations[i][1] === "X" &&
        winningCombinations[i][2] === "X"
      ) {
        navigate(`/restart/${"Cross win"}`);
        usedValues = [];
        winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
      } else if (
        winningCombinations[i][0] === "O" &&
        winningCombinations[i][1] === "O" &&
        winningCombinations[i][2] === "O"
      ) {
        navigate(`/restart/${"Circle win"}`);

        usedValues = [];
        winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
      }
    }
    if (usedValues.length === 9) {
      navigate(`/restart/${"Draw"}`);
    }
  };

  const onClick = () => {
    if (usedValues.includes(props.value)) {
      return;
    } else {
      usedValues.push(props.value);
      combinations();
      if (move) {
        setShape(<Circle />);
      } else if (!move) {
        setShape(<Cross />);
      }
      setMove(!move);
    }
    winnerVerification();
  };

  return (
    <button className="pool" type="submit" onClick={onClick}>
      {shape}
    </button>
  );
};

const Pools = () => {
  const headers = [];

  for (let i = 0; i < 9; i++) {
    headers.push(<Pool key={i} value={i} />);
  }

  return <div className="poolsContainer">{headers}</div>;
};
export default Pools;
