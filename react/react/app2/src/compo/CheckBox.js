import React from "react";

const CheckBox = ({ value, setValue }) => {
  const handleCheckbox = (e) => {
    const checkbox = e.target.checked;
    setValue((prevState) => ({ ...prevState, checkbox }));
  };
  return (
    <label htmlFor="checkbox">
      checkbox
      <input type="checkbox" name="checkbox" onChange={handleCheckbox}></input>
    </label>
  );
};

export default CheckBox;
