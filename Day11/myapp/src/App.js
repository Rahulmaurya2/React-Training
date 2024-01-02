import "./App.css";
import Count from "./components/Count";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button
        onClick={(e) => dispatch({ type: "INCREMENT" })}
        style={{ margin: "20px" }}
      >
        Increment
      </button>
      <Count />
      <button
        onClick={(e) => dispatch({ type: "DECREMENT" })}
        style={{ margin: "20px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
