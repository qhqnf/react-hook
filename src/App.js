import React, { useState } from "react";
import { useInput, useTabs } from "./hooks/StateHooks";

const apiContent = [
  {
    tab: "Section 1",
    content: "I'm section 1",
  },
  {
    tab: "Section 2",
    content: "I'm section 2",
  },
  {
    tab: "Section 3",
    content: "I'm section 3",
  },
];

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);
  const { currentItem, changeItem } = useTabs(0, apiContent);
  return (
    <div className="App">
      <div>
        <h1>Hello! Number:{item}</h1>
        <button onClick={incrementItem}>+1</button>
        <button onClick={decrementItem}>-1</button>
      </div>
      <div>
        <input placeholder="Name" {...name}></input>
      </div>
      <div>
        {apiContent.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
};

export default App;
