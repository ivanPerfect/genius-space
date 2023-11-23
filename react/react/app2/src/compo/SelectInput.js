import React from "react";

const SelectInput = ({ value, setValue }) => {
  const selectOptin = [
    { id: 1, value: "option1" },
    { id: 2, value: "option2" },
    { id: 3, value: "option3" },
    { id: 4, value: "option4" },
    { id: 5, value: "option5" },
  ];
  const handleSelect = (e) => {
    const select = e.target.value;
    setValue((prevState) => ({ ...prevState, select }));
  };
  return (
    <label htmlFor="firstName">
      select
      <select type="select" name="select" onChange={handleSelect}>
        {selectOptin.map(option=><option key={option.id}>{option.value}</option>)}
      </select>
    </label>
  );
};

export default SelectInput;
