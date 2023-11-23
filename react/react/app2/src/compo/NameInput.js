import React from "react";

const NameInput = ({ value, setValue }) => {
  const handleName = (e) => {
    const name = e.target.value;
    setValue((prevState) => ({ ...prevState, name }));
  };
  return (
    <label htmlFor="firstName">
      firstName
      <input type="text" name="firstName" onChange={handleName}></input>
    </label>
  );
};

export default NameInput;
