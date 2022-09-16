import Button from "./Button";
import "./styles/Start.css";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div className="startContainer">
      <div className="startTitle">Tic Tac Toe</div>
      <Link to="/game">
        <Button name={"Start"} />
      </Link>
    </div>
  );
};
export default Start;
