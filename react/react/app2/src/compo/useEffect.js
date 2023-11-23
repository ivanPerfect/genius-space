import React from "react";
import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    return () => {
      console.log("WillUpadateUseEffect+");
    };
  }, []);
  return <div>useEffect</div>;
};

export default UseEffect;
