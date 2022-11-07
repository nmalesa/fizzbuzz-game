import { useRef } from "react";

const FizzBuzzImg = ({ img, alt }) => {
  const position = useRef({
    position: "absolute",
    top: 100 * Math.random() + "%",
    left: 100 * Math.random() + "%",
  });

  const getImage = (img) => {
    if (img === "fizz") return require("../assets/fizz.png");
    else if (img === "buzz") return require("../assets/buzz.png");
    else if (img === "fizzbuzz") return require("../assets/fizzbuzz.png");
  };

  return (
    <div>
      <img
        className={img}
        src={getImage(img)}
        alt={alt}
        style={position.current}
      />
    </div>
  );
};

export default FizzBuzzImg;
