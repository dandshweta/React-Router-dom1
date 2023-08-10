import { useState } from "react";

const ToDoList = () => {
  const [name1, setName1] = useState("");
  // const [submittedName, setSubmittedName] = useState(""); // State for submitted name

  const handleNameChange = (event) => {
    setName1(event.target.value);
  };

  const dataSubmit = () => {
    console.log("Submit clicked");
    console.log("Name:", name1);
    setName1(name1); // Update the submitted name state
  };

  return (
    <>
      <div>
        <label>Name:</label>
        <input type="text" value={name1} onChange={handleNameChange} />
      </div>
      <button onClick={dataSubmit}>Submit</button>
      <div>props</div>
      <div>Submitted Name: {name1}</div>
    </>
  );
};

export default ToDoList;
