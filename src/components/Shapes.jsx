import "./styles/shapes.css";

export const Circle = () => {
  return <div className="circle" key={"circle"}></div>;
};

export const Cross = () => {
  return (
    <div className="crossContainer">
      <div className="cross" key="cross"></div>
    </div>
  );
};
