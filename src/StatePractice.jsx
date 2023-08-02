import React from "react";

const StatePractice = () => {
  let a = 2;
  function getdata() {
    let a = 6;
    // let a = 4;  we can not directly change the variables in react so we use usestate
    console.log("inner func output-", a);
  }
  console.log("outer func output-", a);
  return (
    <>
      <div>StatePractice</div>
      <button onClick={getdata}>click me!</button>
    </>
  );
};
export default StatePractice;
