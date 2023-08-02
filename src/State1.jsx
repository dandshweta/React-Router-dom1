// import React from "react";

const State1 = () => {
  let a = 5;

  function updateData() {
    a = a + 5; // This will update the outer 'a' variable.
    console.log(a); // To see the updated value in the console.
  }

  console.log(a); // This will log 5 to the console when the component is rendered.

  return (
    <>
      <div>State</div>
      <p>we cannot change the state value directly in React</p>
      <button onClick={updateData}>Add</button>
    </>
  );
};

export default State1;
