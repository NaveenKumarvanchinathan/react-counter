import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="imgg" id="body">
      <div className="nav">
        <div className="nav1" id="nav1">
          Counter App
        </div>
        <div className="nav1" id="nav2_1">
          {count}
        </div>
        <div className="nav2">
          <button id="button1" onClick={() => setCount(count - 1)}>
            -
          </button>
          <button id="button2" onClick={() => setCount(0)}>
            Reset
          </button>
          <button
           id="button3"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <div className="nav3" style={{ color: "aliceblue", fontSize: "2rem" }}>
          <input
            type="number"
            placeholder="Enter a number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ color: "white" }}
          />
          <button
          id="button4"
            onClick={() => setCount(Number(inputValue) || 0)}
          >
            Set Value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
