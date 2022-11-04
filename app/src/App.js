import { createRoot } from "react-dom/client";
import Fizz from "./components/Fizz";
import Buzz from "./components/Buzz";

const App = () => {
  return (
    <div>
      <h1>FizzBuzz</h1>
      <Fizz />
      <Buzz />
      <div className="img-container">
        {/* <img
          className="buzz-img"
          src={require("../assets/buzz.png")}
          alt="Illustration of bee"
        /> */}
        <img
          className="fizz-img"
          src={require("./assets/drink.jpg")}
          alt="Illustration of fizzy drink with straw"
        />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
