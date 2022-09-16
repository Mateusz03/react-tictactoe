import Button from "./Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./styles/Restart.css";

const Restart = () => {
  const { winner } = useParams();
  return (
    <div className="restartContainer">
      <div className="winner">{winner}</div>
      <Link to="/game">
        <Button name="Restart" />
      </Link>
    </div>
  );
};
export default Restart;
