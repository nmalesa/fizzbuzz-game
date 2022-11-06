import { useRef } from "react";

const Buzz = () => {
  const PositionStyle = useRef({
    position: "absolute",
    top: 100 * Math.random() + "%",
    left: 100 * Math.random() + "%",
  });

  return (
    <div>
      <img
        className="buzz-img"
        src={require("../assets/buzz.png")}
        alt="Illustration of bee with the word 'BUZZ'"
        style={PositionStyle.current}
      />
    </div>
  );
};

export default Buzz;
