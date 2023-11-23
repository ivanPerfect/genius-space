import React from "react";

const InputEmail = ({value,setValue}) => {
  const handleEmail = (e) => {
    const email = e.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };
  return (
    <label htmlFor="email">
      email
      <input type="email" name="email" onChange={handleEmail}></input>
    </label>
  );
};

export default InputEmail;
