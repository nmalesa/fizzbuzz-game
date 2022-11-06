import { useRef } from "react";

const FizzBuzz = () => {
  const PositionStyle = useRef({
    position: "absolute",
    top: 100 * Math.random() + "%",
    left: 100 * Math.random() + "%",
  });

  return (
    <div>
      <img
        className="fizzbuzz-img"
        src={require("../assets/fizzbuzz.png")}
        alt="Illustration of bubble and bee with the word 'FIZZBUZZ'"
        style={PositionStyle.current}
      />
    </div>
  );
};

export default FizzBuzz;
