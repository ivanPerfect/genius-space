import React, { useState } from "react";
import InputData from "./InputData";
import CheckBox from "./CheckBox";
import NameInput from "./NameInput";
import InputEmail from "./InputEmail";
import InputRadio from './InputRadio';
import SelectInput from './SelectInput';

const UncontlorForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: false,
    radio: '',
    select:''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <NameInput value={value} setValue={setValue} /> <br/>
        <InputEmail value={value} setValue={setValue} /><br/>
        <CheckBox value={value} setValue={setValue} /><br/>
        <InputRadio value={value} setValue={setValue}/><br/>
        <SelectInput value={value} setValue={setValue}/><br/>
        <button type="submit">send</button>
      </form>
      <InputData value={value} />
    </>
  );
};

export default UncontlorForm;
