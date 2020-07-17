import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <span>{item}</span>
      <button onClick={incrementItem}>plus</button>
      <button onClick={decrementItem}>minus</button>
    </div>
  );
};

export default App;
