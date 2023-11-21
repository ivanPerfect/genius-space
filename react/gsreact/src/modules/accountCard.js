import React from "react";

const AccountCard = ({ name, city, password, email }) => {
  return (
    <div>
      <p>Register Form</p>
      <div>
        <p>Name: {name}</p>
      </div>
      <div>
        <p>city: {city}</p>
      </div>
      <div>
        <p>email: {email}</p>
      </div>
    </div>
  );
};

export default AccountCard;
