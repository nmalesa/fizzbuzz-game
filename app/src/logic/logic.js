const getFizzBuzz = () => {
    for (let idx = 1; idx < 101; idx++) {
        if (idx % 15 === 0) return "FizzBuzz";
        else if (idx % 3 === 0) return "Fizz";
        else if (idx % 5 === 0) return "Buzz";
        else idx;
    }
}

export default getFizzBuzz;