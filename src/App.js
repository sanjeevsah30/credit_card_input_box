import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [credit, setCredit] = useState("");
  const [last4, setlast4] = useState("");
  console.log(last4);

  const handleblur = () => {
    console.log("focused1");

    setIsFocused(false);
  };

  const handleChange = (e) => {
    setCredit(e.target.value);
  };

  const handlefocus = () => {
    console.log("focused");
    setlast4(
      credit
        .split("")
        .map((i, idx) => {
          if (idx > 11) return i;
          else if (idx % 4 === 0 && idx !== 0) return "-x";
          else return "x";
        })
        .join("")
    );
    setIsFocused(true);
  };

  console.log(credit);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>credit card</p>
      <input
        name="creditcardnumber"
        type="text"
        value={isFocused ? credit : last4}
        onFocus={handlefocus}
        onChange={handleChange}
        onBlur={handleblur}
      />
    </div>
  );
}
