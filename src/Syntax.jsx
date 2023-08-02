import React from "react";
import Header from "./Header";
// import Props from "./Props";

export const Syntax = (name) => {
  let a = 5;
  let b = 5;
  let c = 1;

  return (
    <>
      <p>hiii</p>
      <div>syntax</div>
      <p>addition: {a + b}</p>
      <p>{c > 2 ? "graterno" : "SmallerNo"}</p>
      <Header /> {/* component create*/}
      {/* <Props prop={name1} /> */}
      {/* <Props /> */}
      {/* <p>my name is {name}</p> */}
    </>
  );
};
