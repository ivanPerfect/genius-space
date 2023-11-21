import React, { useState } from "react";
import AccountCard from "./accountCard";
import Form from "./Form";

const Home = () => {
  const [name, useName] = useState("");
  const [city, useCity] = useState("");
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [acc, useAcc] = useState(false);

  const HandleChangeEmail = (e) => {
    useEmail(e.target.value);
  };
  const HandleChangeName = (e) => {
    useName(e.target.value);
  };
  const HandleChangeCity = (e) => {
    useCity(e.target.value);
  };
  const HandleChangePassword = (e) => {
    usePassword(e.target.value);
  };

  const OnSubmit = () => {
    useAcc(true);
  };
  return (
    <div>
      {acc ? (
        <AccountCard name={name} city={city} email={email}/>
      ) : (
        <Form
          handleChangePassword={HandleChangePassword}
          handleChangeCity={HandleChangeCity}
          handleChangeName={HandleChangeName}
          handleChangeEmail={HandleChangeEmail}
          onSubmit={OnSubmit}
          name={name}
          city={city}
          password={password}
          email={email}
        />
      )}
    </div>
  );
};

export default Home;
