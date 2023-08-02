import React from "react";

const WithoutUseState = () => {
  let count = 2;
  function changedata() {
    count + 5;
  }
  return (
    <>
      <div>WithoutUseState</div>
      <button onClick={changedata}> click me!</button>
    </>
  );
};
export default WithoutUseState;
