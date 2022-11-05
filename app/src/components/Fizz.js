const Fizz = () => {
  console.log("I am rendered");

  return (
    <div>
      <img
        className="fizz-img"
        src={require("../assets/fizz.png")}
        alt="Illustration of bubble with the word 'FIZZ'"
      />
    </div>
  );
};

export default Fizz;
