import "./styles/Button.css";

const Button = (props) => {
  return (
    <button className="button" type="submit">
      {props.name}
    </button>
  );
};
export default Button;
