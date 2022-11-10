import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import Rules from "./components/Rules";
import Modal from "./components/Modal";
import getFizzBuzz from "./logic/logic";

const App = () => {
  const [target, setTarget] = useState("");
  const [guess, setGuess] = useState("");
  const [gameData, setGameData] = useState([]);
  const [fizzbuzz, setFizzBuzz] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTarget(Math.floor(Math.random() * 100 + 1).toString());
  }, []);

  const getGameData = (target) => {
    const gameData = getFizzBuzz(target);
    let fizzbuzz = 0;
    setGameData(gameData);

    for (let idx = 1; idx < gameData.length; idx++) {
      if (gameData[idx] === "fizzbuzz") {
        fizzbuzz++;
      }
    }

    const stringifiedFizzBuzz = fizzbuzz.toString();

    setFizzBuzz(stringifiedFizzBuzz);
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
      <Rules />
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
            <p className="question">
              How many times will{" "}
              <strong>
                <em>FizzBuzz</em>
              </strong>{" "}
              appear?
            </p>
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
            {gameData.map((data, idx) =>  {
             return (
                <div key={idx}>
                  <p className="cell-text">{data.toString().toUpperCase()}</p>
                </div>
              )
             }
            )}
          </div>
        </div>
      </div>
      {showModal ? (
        <Modal>
          <div className="results">
            <p className="results-label">FizzBuzz: {fizzbuzz}</p>
            <p className="results-label">Your Guess: {guess}</p>
            {guess === fizzbuzz ? (
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
