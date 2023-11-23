import React from "react";

const InputRadio = ({ value, setValue }) => {
  const handleRadio = (e) => {
    const radio = e.target.name;
    setValue((prevState) => ({ ...prevState, radio }));
  };
  return (
    <>
      <label htmlFor="radio">
        radio1
        <input type="radio" name="radio" onChange={handleRadio} value={value.radio} checked={value.radio==='radio'}></input>
      </label>
      <label htmlFor="radio">
        radio2
        <input type="radio" name="radio2" value={value.radio} checked={value.radio==='radio2'} onChange={handleRadio}></input>
      </label>
    </>
  );
};

export default InputRadio;
