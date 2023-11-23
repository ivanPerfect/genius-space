import React, { useState } from "react";

const UncontlorForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          firstName
          <input type="text" name="firstName" onChange={handleName}></input>
        </label>
        <label htmlFor="email">
          email
          <input type="email" name="email" onChange={handleEmail}></input>
        </label>
        <button type="submit">send</button>
      </form>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </>
  );
};

export default UncontlorForm;
