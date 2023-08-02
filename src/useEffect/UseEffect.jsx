import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, updateCount] = useState(0);
  function getdata() {
    updateCount(count + 1);

    // console.log(`Increased value: ${count}`);
    console.log(count);
  }
  useEffect(() => {
    console.log("component mounted");
  });

  return (
    <>
      <div>UsingUseState</div>
      <div>{count}</div>
      <button onClick={getdata}>click</button>
    </>
  );
};
export default UseEffect;
