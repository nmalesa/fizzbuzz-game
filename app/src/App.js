import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import Fizz from "./components/Fizz";
import Buzz from "./components/Buzz";
import FizzBuzz from "./components/FizzBuzz";
import Results from "./components/Results";
import { getFizzBuzz } from "./logic/logic";

const App = () => {
  const [target, setTarget] = useState("");
  const [guess, setGuess] = useState("");
  const [fizz, setFizz] = useState(0);
  const [buzz, setBuzz] = useState(0);
  const [fizzbuzz, setFizzbuzz] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    setTarget(Math.floor(Math.random() * 100 + 1).toString());
  }, []);

  const getGameData = (target) => {
    const gameData = getFizzBuzz(target);

    setFizz(gameData.fizz);
    setBuzz(gameData.buzz);
    setFizzbuzz(gameData.fizzbuzz);
    setNumbers(gameData.numbers);
  };

  return (
    <div>
      <h1>FizzBuzz</h1>
      <h2>Save your fizzy beverage from the buzzy bees!</h2>
      <div className="bees-and-bubble-container">
        {Array.from(Array(fizz)).map((_, idx) => (
          <Fizz key={idx} />
        ))}
        {Array.from(Array(buzz)).map((_, idx) => (
          <Buzz key={idx} />
        ))}
        {Array.from(Array(fizzbuzz)).map((_, idx) => (
          <FizzBuzz key={idx} />
        ))}
      </div>
      <img
        className="drink-img"
        src={require("./assets/drink.jpg")}
        alt="Illustration of fizzy drink with straw"
      />
      <div className="game-play">
        <p className="rules">
          In FizzBuzz, you are given a random target number. For every number
          from 1 to the target, multiples of three will print "Fizz", and
          multiples of five will print "Buzz". Multiples of both three and five
          print "FizzBuzz"!
          <br />
          The object of the game is to guess how many times the word "FizzBuzz"
          will appear.
        </p>
        <p className="target">{target}</p>
        <p className="question">
          How many times will the word "FizzBuzz" appear?
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getGameData(target);
            setShowResults(true);
          }}
        >
          <label htmlFor="guess">
            Enter Your Guess
            <input
              id="guess"
              value={guess}
              placeholder="Guess"
              onChange={(e) => setGuess(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      {showResults ? <Results fizzbuzz={fizzbuzz} guess={guess} /> : <></>}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
