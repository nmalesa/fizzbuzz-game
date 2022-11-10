import getFizzBuzz from "../src/logic/logic";

describe("tests game logic", () => {
  test("returns game data for a given even target number", () => {
    const gameData = getFizzBuzz(84);
    let fizz = 0;
    let buzz = 0;
    let fizzbuzz = 0;
    let numbers = 0;

    for (let idx = 1; idx <= gameData.length; idx++) {
      if (gameData[idx] === "fizzbuzz") {
        fizzbuzz++;
      } else if (gameData[idx] === "fizz") {
        fizz++;
      } else if (gameData[idx] === "buzz") {
        buzz++;
      } else { 
        numbers++;
      }
    }

    expect(fizz).toBe(23);
    expect(buzz).toBe(11);
    expect(fizzbuzz).toBe(5);
    expect(numbers).toBe(45);
  });

  test("returns game data for a given odd target number", () => {
    const gameData = getFizzBuzz(17);
    let fizz = 0;
    let buzz = 0;
    let fizzbuzz = 0;
    let numbers = 0;

    for (let idx = 1; idx <= gameData.length; idx++) {
      if (gameData[idx] === "fizzbuzz") {
        fizzbuzz++;
      } else if (gameData[idx] === "fizz") {
        fizz++;
      } else if (gameData[idx] === "buzz") {
        buzz++;
      } else { 
        numbers++;
      }
    }

    expect(fizz).toBe(4);
    expect(buzz).toBe(2);
    expect(fizzbuzz).toBe(1);
    expect(numbers).toBe(10);
  });

  test("returns empty game data array when given no target number", () => {
    const gameData = getFizzBuzz();
    expect(gameData.length).toBe(0);
  });
});
