import { useState } from "react";

const Props = () => {
  const [name1, changeName] = useState(" ");
  const onhandle = (event) => {
    changeName(event.target.value);
  };
  const dataSubmit = () => {
    console.log("Submit clicked");
    console.log("Name:", name1);
  };
  // console.log(name1);
  return (
    <>
      <div>
        <label>Name:</label>
        <input type="text" value={name1} onChange={onhandle}></input>
      </div>
      <button onClick={dataSubmit}>submit</button>
      <div>props</div>
      <div>{name1}</div>
    </>
  );
};

export default Props;
