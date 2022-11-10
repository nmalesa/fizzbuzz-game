import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import FizzBuzzImg from "./components/FizzBuzzImg";
import Modal from "./components/Modal";
import getFizzBuzz from "./logic/logic";

const App = () => {
  const [target, setTarget] = useState("");
  const [guess, setGuess] = useState("");
  const [gameData, setGameData] = useState([]);
  const [fizz, setFizz] = useState(0);
  const [buzz, setBuzz] = useState(0);
  const [fizzbuzz, setFizzbuzz] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTarget(Math.floor(Math.random() * 100 + 1).toString());
  }, []);

  const getGameData = (target) => {
    const gameData = getFizzBuzz(target);
    setGameData(gameData);

    // setFizz(gameData.fizz);
    // setBuzz(gameData.buzz);
    // setFizzbuzz(gameData.fizzbuzz);
    // setNumbers(gameData.numbers);
  };

  const toggleModal = () => setShowModal(!showModal);

  const refreshGame = () => {
    toggleModal();
    window.location.reload();
  };

  return (
    <div className="grid-container">
      <div className="header">
        <h1>FizzBuzz</h1>
        <h2>Save your fizzy drink from the buzzy bees!</h2>
      </div>
      <div className="rules">
        <p className="rules-text">
          In FizzBuzz, you are given a random target number. For every number
          from 1 to the target, multiples of three will print "Fizz", and
          multiples of five will print "Buzz". Multiples of both three and five
          will print "FizzBuzz"!
          <br />
          <br />
          The object of the game is to guess how many times the word "FizzBuzz"
          will appear.
        </p>
      </div>
      <div className="game">
        <div className="game-interface">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getGameData(target);
              toggleModal();
            }}
          >
            <p className="target">{target}</p>
            <p className="question">How many times will "FizzBuzz" appear?</p>
            <label htmlFor="guess">
              Enter Your Guess
              <input
                id="guess"
                value={guess}
                placeholder="FizzBuzz number"
                onChange={(e) => setGuess(e.target.value)}
              />
            </label>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="display">
        <img
          className="drink-img"
          src={require("./assets/drink.jpg")}
          alt="Illustration of fizzy drink with straw"
        />
      </div>
      <div className="honeycomb">
        <div className="hexagon-grid">
          <div className="cells-container">
            {gameData.map((data, idx) => {
              if (data === "fizz") {
                return (
                  <div key={idx} className="cell">
                    <FizzBuzzImg img="fizz" alt="Test" />
                  </div>
                );
              } else if (data === "buzz") {
                return (
                  <div key={idx} className="cell">
                    <FizzBuzzImg img="buzz" alt="Test" />
                  </div>
                );
              } else if (data === "fizzbuzz") {
                return (
                  <div key={idx} className="cell">
                    <FizzBuzzImg img="fizzbuzz" alt="Test" />
                  </div>
                );
              }

              return (
                <div key={idx} className="cell">
                  <p className="cell-text">{data}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showModal ? (
        <Modal>
          <div className="results">
            <p className="results-label">FizzBuzz: {fizzbuzz}</p>
            <p className="results-label">Your Guess: {guess}</p>
            {guess === target ? (
              <p>Congratulations! Enjoy your delicious fizzy drink!</p>
            ) : (
              <p>Oh, no! The buzzy bees drank your fizzy drink!</p>
            )}
            <button onClick={refreshGame}>Play Again</button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
