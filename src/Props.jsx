import { useState } from "react";
import { Syntax } from "./syntax";
const Props = () => {
  const [name1, setName] = useState("");
  return (
    <>
      <h2>my name is {name1}</h2>
      <p>{name1}</p>
      <div>Props</div>
      <input
        type="text"
        value={name1}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <Syntax name={name1} />
    </>
  );
};
export default Props;
