// const getFizzBuzz = (target) => {
//   const number = parseInt(target);

//   const gameData = {
//     fizzbuzz: 0,
//     fizz: 0,
//     buzz: 0,
//     numbers: [],
//   };

//   if (!target) {
//     console.error("Error: Target not provided");
//     return gameData;
//   }

//   for (let idx = 1; idx <= number; idx++) {
//     if (idx % 15 === 0) gameData.fizzbuzz++;
//     else if (idx % 3 === 0) gameData.fizz++;
//     else if (idx % 5 === 0) gameData.buzz++;
//     else gameData.numbers.push(idx);
//   }

//   return gameData;
// };

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

  console.log("Game data: ", gameData)
  return gameData;
};

getFizzBuzz(17);

export default getFizzBuzz;
