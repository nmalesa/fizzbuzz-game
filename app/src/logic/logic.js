export const getFizzBuzz = (number) => {
  for (let idx = 1; idx <= number; idx++) {
    if (idx % 15 === 0) console.log("FizzBuzz");
    else if (idx % 3 === 0) console.log("Fizz");
    else if (idx % 5 === 0) console.log("Buzz");
    else console.log(idx);
  }
};
