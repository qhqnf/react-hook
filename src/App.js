import React, { useState, useEffect } from "react";
import { useInput, useTabs } from "./hooks/StateHooks";
import {
  useTitle,
  useClick,
  useFadeIn,
  useNetwork,
} from "./hooks/useEffectHooks";
import { useConfirm, usePreventLeave, useBeforeLeave } from "./hooks/Message";

import "./App.css";

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
  const sayHello = () => console.log("Hello!");
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  useEffect(sayHello, [numberOne]);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  const bigText = useClick(sayHello);
  const deleteWorld = () => console.log("Deleting World");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you Sure?", deleteWorld, abort);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const beg = () => console.log("Please Don't leave");
  useBeforeLeave(beg);
  const fadeInH1 = useFadeIn(1, 2);
  const handleNetworkChange = (online) => {
    console.log("Network changed");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <div className="container use_state">
        <h1>Hello! Number:{item}</h1>
        <button onClick={incrementItem}>+1</button>
        <button onClick={decrementItem}>-1</button>
      </div>
      <div className="container useInput">
        <input placeholder="Name" {...name}></input>
      </div>
      <div className="container useEffect">
        {apiContent.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
      <div className="container useTitle">
        <button onClick={() => setNumberOne(numberOne + 1)}>{numberOne}</button>
        <button onClick={() => setNumberTwo(numberTwo + 1)}>{numberTwo}</button>
      </div>
      <div className="container useClick">
        <h1 ref={bigText}>Hi</h1>
      </div>
      <div className="container useConfirm">
        <button onClick={confirmDelete}>Delete World?</button>
      </div>
      <div className="container usePreventLeave">
        <button onClick={enablePrevent}>protect</button>
        <button onClick={disablePrevent}>unprotect</button>
      </div>
      <div className="container useFadeIn">
        <h2 {...fadeInH1}>Wow~</h2>
      </div>
      <div className="container useNetwork">
        <h2>{online ? "Online" : "Offline"}</h2>
      </div>
    </div>
  );
};

export default App;
