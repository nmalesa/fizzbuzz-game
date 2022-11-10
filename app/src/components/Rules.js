const Rules = () => {
  return (
    <div className="rules">
      <p className="rules-text">
        In FizzBuzz, you are given a random target number. For every number from
        1 to the target, multiples of three will print{" "}
        <strong>
          <em>Fizz</em>
        </strong>
        , and multiples of five will print{" "}
        <strong>
          <em>Buzz</em>
        </strong>
        . Multiples of both three and five will print{" "}
        <strong>
          <em>FizzBuzz</em>
        </strong>
        !
        <br />
        <br />
        The object of the game is to guess how many times the word{" "}
        <strong>
          <em>FizzBuzz</em>
        </strong>{" "}
        will appear.
      </p>
    </div>
  );
};

export default Rules;
