import React from "react";
import { useState } from "react";

const UsingUseState = () => {
  //   let count = 0;
  const [count, updateCount] = useState(0);
  function getdata() {
    updateCount(count + 1);
    // console.log(count);
    console.log(`Increased value: ${count}`);
  }
  //   console.log(count);
  return (
    <>
      <div>UsingUseState</div>
      <div>{count}</div>
      <button onClick={getdata}>click</button>
    </>
  );
};
export default UsingUseState;
