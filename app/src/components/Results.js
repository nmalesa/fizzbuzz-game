const Results = ({ fizzbuzz, guess }) => {
  return (
    <div>
      <p>FizzBuzz: {fizzbuzz}</p>
      <p>Your Guess: {guess}</p>
      <p>Congratulations! Enjoy your delicious fizzy drink!</p>
      <button>Play Again</button>
    </div>
  );
};

export default Results;

{
  /* <>
      {fizzbuzz === guess ? (
        <div>
          <p>FizzBuzz: {fizzbuzz}</p>
          <p>Your Guess: {guess}</p>
          <p>Congratulations! Enjoy your delicious fizzy drink!</p>
          <button>Play Again</button>
        </div>
      ) : (
        <div>
          <p>FizzBuzz: {fizzbuzz}</p>
          <p>Your Guess: {guess}</p>
          <p>Uh-oh! The buzzy bees drank your fizzy drink!</p>
          <button>Play Again</button>
        </div>
      )}
    </> */
}
