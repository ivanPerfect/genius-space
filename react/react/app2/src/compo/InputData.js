import React from "react";

const InputData = ({value}) => {
  return (
    <>
      <p>name : {value.name}</p>
      <p>email : {value.email}</p>
      <p>checkbox : {value.checkbox.toString()}</p>
      <p>radio : {value.radio}</p>
      <p>Select : {value.select}</p>
    </>
  );
};

export default InputData;
