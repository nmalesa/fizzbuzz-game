import { createRoot } from "react-dom/client";
import { useState } from "react";
import Button from "./components/Button";
import Fizz from "./components/Fizz";
import Buzz from "./components/Buzz";
import FizzBuzz from "./components/FizzBuzz";
import { getFizzBuzz } from "./logic/logic";

const App = () => {
  const [target, setTarget] = useState("");

  return (
    <div>
      <h1>FizzBuzz</h1>
      <div className="img-container">
        <img
          className="drink-img"
          src={require("./assets/drink.jpg")}
          alt="Illustration of fizzy drink with straw"
        />
        <button
          onClick={() =>
            setTarget(Math.floor(Math.random() * 100 + 1).toString())
          }
        >
          Get Number
        </button>
        <p>How many times will the word "FizzBuzz" appear?</p>
        <p>{target}</p>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
