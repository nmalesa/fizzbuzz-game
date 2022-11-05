import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import Fizz from "./components/Fizz";
import Buzz from "./components/Buzz";
import FizzBuzz from "./components/FizzBuzz";
import { getFizzBuzz } from "./logic/logic";

const App = () => {
  const [target, setTarget] = useState("");
  const [guess, setGuess] = useState("")
  const [fizz, setFizz] = useState(0);
  const [buzz, setBuzz] = useState(0);
  const [fizzbuzz, setFizzbuzz] = useState(0);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setTarget(Math.floor(Math.random() * 100 + 1).toString())
  }, [])

  const getGameData = (target) => {
    const gameData = getFizzBuzz(target);

    setFizz(gameData.fizz);
    setBuzz(gameData.buzz);
    setFizzbuzz(gameData.fizzbuzz);
    setNumbers(gameData.numbers);
  }

  return (
    <div>
      <h1>FizzBuzz</h1>
      {Array.from(Array(fizz)).map((_, idx) => <Fizz key={idx} />)}
      {Array.from(Array(buzz)).map((_, idx) => <Buzz key={idx} />)}
      {Array.from(Array(fizzbuzz)).map((_, idx) => <FizzBuzz key={idx} />)}
      <div className="img-container">
        <img
          className="drink-img"
          src={require("./assets/drink.jpg")}
          alt="Illustration of fizzy drink with straw"
        />
        <p>{target}</p>
        <p>How many times will the word "FizzBuzz" appear?</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getGameData(target);
            // getFizzBuzz(target);
          }}
        >
          <label htmlFor="guess">
            Enter Your Guess
            <input id="guess" value={guess} placeholder="Guess" onChange={(e) => setGuess(e.target.value)}/>
          </label>
          <button>Submit</button>
        </form>
        {/* <p>Fizz: {fizz}</p>
        <p>Buzz: {buzz}</p>
        <p>FizzBuzz: {fizzbuzz}</p>
        <p>Numbers: {numbers}</p> */}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
