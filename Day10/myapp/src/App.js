import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";
//import ConterButton from "./components/ConterButton";
//import { ConuterContext } from "./context/CounterContext";

function App() {
  // const counterState = useContext(ConuterContext);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Item name="Dell laptop" price={1000} />
      <Item name="Asus laptop" price={1000} />
      <Item name="Mac laptop" price={1080} />

      <Cart />

      {/* <h1>Count is {counterState.count}</h1>
      <ConterButton /> <br />
      <ConterButton />
      <br />
      <ConterButton />
      <br />
      <ConterButton /> */}
    </div>
  );
}

export default App;
