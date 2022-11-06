import { useRef } from "react";

const Fizz = () => {
  const PositionStyle = useRef({
    position: "absolute",
    top: 100 * Math.random() + "%",
    left: 100 * Math.random() + "%",
  });

  return (
    <div>
      <img
        className="fizz-img"
        src={require("../assets/fizz.png")}
        alt="Illustration of bubble with the word 'FIZZ'"
        style={PositionStyle.current}
      />
    </div>
  );
};

export default Fizz;
