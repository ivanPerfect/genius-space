import React, { useState } from "react";

export default function List() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const handle = () => {
    const update = [...item, input];
    setItem(update);
    setCount(count + 1);
    setInput("");
  };

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <>
      {count}
      <input onChange={onChange} value={input}></input>
      <ul>
        {item.map((elemet) => (
          <li>{elemet}</li>
        ))}
      </ul>
      <button onClick={handle}> Add</button>
    </>
  );
}
