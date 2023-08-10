import React, { useState } from "react";
import "./index.css";

const App = () => {
  // Creating State
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  // updating calc
  const updateCalc = (value) => {
    // case 1 -> calc is empty and user is trying to click on operators then do not add that operator in calc

    // case 2 -> if user adds duplicates operators then remove the last operator

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    // if last value is not ops the set the result
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // creating digits and pushing it in digits array and returing it
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }

    return digits;
  };

  // calculating the value using eval function
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // setting the calc value and result value empty
  const clear = () => {
    setResult("");
    setCalc("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={clear}>CLEAR</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
