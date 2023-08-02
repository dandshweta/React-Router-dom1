import React from "react";
import { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [count, updateCount] = useState(0);
  const [name, updateName] = useState("shweta");
  function getdata() {
    updateCount(count + 1);

    // console.log(`Increased value: ${count}`);
    console.log(count);
  }
  function getData1() {
    updateName("sneha");
  }
  useEffect(() => {
    console.log("component mounted");
  }, [name]);

  return (
    <>
      <div>UsingUseState</div>
      <div>{count}</div>
      <button onClick={getdata}>click2</button>
      <button onClick={getData1}>click for name change</button>
    </>
  );
};
export default UseEffect2;
