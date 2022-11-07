import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import FizzBuzzImg from "./components/FizzBuzzImg";
import Results from "./components/Results";
import { getFizzBuzz } from "./logic/logic";

const App = () => {
  const [target, setTarget] = useState("");
  const [guess, setGuess] = useState("");
  const [fizz, setFizz] = useState(0);
  const [buzz, setBuzz] = useState(0);
  const [fizzbuzz, setFizzbuzz] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [showResults, setShowResults] = useState(false);

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
    <div className="grid-container">
      <div className="header">
        <h1>FizzBuzz</h1>
        <h2>Save your fizzy beverage from the buzzy bees!</h2>
      </div>
      <div className="rules">
        <p>
          In FizzBuzz, you are given a random target number. For every number
          from 1 to the target, multiples of three will print "Fizz", and
          multiples of five will print "Buzz". Multiples of both three and five
          will print "FizzBuzz"!
          <br />
          The object of the game is to save your fizzy drink by guessing how
          many times the word "FizzBuzz" will appear.
        </p>
      </div>
      <div className="game">
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
        {showResults ? <Results fizzbuzz={fizzbuzz} guess={guess} /> : <></>}
      </div>
      <div className="display">
        <div className="bees-and-bubble-container">
          {Array.from(Array(fizz)).map((_, idx) => (
            <FizzBuzzImg
              key={idx}
              img={"fizz"}
              alt={"Illustration of bubble with the word 'FIZZ'"}
            />
          ))}
          {Array.from(Array(buzz)).map((_, idx) => (
            <FizzBuzzImg
              key={idx}
              img={"buzz"}
              alt={"Illustration of bee with the word 'BUZZ'"}
            />
          ))}
          {Array.from(Array(fizzbuzz)).map((_, idx) => (
            <FizzBuzzImg
              key={idx}
              img={"fizzbuzz"}
              alt={"Illustration of bubble and bee with the word 'FIZZBUZZ'"}
            />
          ))}
        </div>
        <img
          className="drink-img"
          src={require("./assets/drink.jpg")}
          alt="Illustration of fizzy drink with straw"
        />
      </div>
      <div className="footer"></div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

{
  /* <div>
      <div className="header">
        <h1>FizzBuzz</h1>
        <h2>Save your fizzy beverage from the buzzy bees!</h2>
      </div>
      <div className="rules">
        <p>
          In FizzBuzz, you are given a random target number. For every number
          from 1 to the target, multiples of three will print "Fizz", and
          multiples of five will print "Buzz". Multiples of both three and five
          will print "FizzBuzz"!
          <br />
          The object of the game is to save your fizzy drink by guessing how
          many times the word "FizzBuzz" will appear.
        </p>
      </div>
      <div className="gameplay">
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
      <div className="display">
        <div className="bees-and-bubble-container">
          {Array.from(Array(fizz)).map((_, idx) => (
            <FizzBuzzImg
              key={idx}
              img={"fizz"}
              alt={"Illustration of bubble with the word 'FIZZ'"}
            />
          ))}
          {Array.from(Array(buzz)).map((_, idx) => (
            <FizzBuzzImg
              key={idx}
              img={"buzz"}
              alt={"Illustration of bee with the word 'BUZZ'"}
            />
          ))}
          {Array.from(Array(fizzbuzz)).map((_, idx) => (
            <FizzBuzzImg
              key={idx}
              img={"fizzbuzz"}
              alt={"Illustration of bubble and bee with the word 'FIZZBUZZ'"}
            />
          ))}
        </div>
        <img
          className="drink-img"
          src={require("./assets/drink.jpg")}
          alt="Illustration of fizzy drink with straw"
        />
      </div>
      {showResults ? <Results fizzbuzz={fizzbuzz} guess={guess} /> : <></>} */
}
