import React, { useEffect, useState } from "react";
import './../styles/App.css';

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const num = parseInt(value);

    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]);
    }
  };

  useEffect(() => {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    setSum(total);
  }, [numbers]);

  return (
    <div id="main">
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={input}
        onChange={handleChange}
      />

      <h3>Sum: {sum}</h3>
    </div>
  );
}

export default SumCalculator;