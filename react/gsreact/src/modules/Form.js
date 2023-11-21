import React from "react";

const Form = ({
  name,
  city,
  password,
  email,
  handleChangePassword,
  handleChangeCity,
  handleChangeName,
  handleChangeEmail,
  onSubmit
}) => {
  return (
    <div>
      <p>Register Form</p>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => handleChangeName(event)}
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(event) => handleChangeCity(event)}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => handleChangePassword(event)}
          ></input>
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          ></input>
        </div>
        <button onClick={onSubmit}>Save</button>
      </form>
    </div>
  );
};

export default Form;
