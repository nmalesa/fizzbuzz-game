/**
 * Generates array of gameplay data.
 * This data is used by the game to determine whether the user enters the correct number of "FizzBuzz" occurrences.
 *
 * @param {string} target - Randomly generated number used as gameplay goal
 */
const getFizzBuzz = (target) => {
  const number = parseInt(target);
  const gameData = [];

  if (!target) {
    console.error("Error: Target not provided");
    return gameData;
  }

  for (let idx = 1; idx <= number; idx++) {
    if (idx % 15 === 0) gameData.push("fizzbuzz");
    else if (idx % 3 === 0) gameData.push("fizz");
    else if (idx % 5 === 0) gameData.push("buzz");
    else gameData.push(idx);
  }

  return gameData;
};

export default getFizzBuzz;
