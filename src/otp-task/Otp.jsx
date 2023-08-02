import { useRef } from "react";

const OtpCreate = () => {
  const input = useRef([]);

  const inputChange = (id) => {
    console.log("CurrentRef", input.current[id]);

    input.current[id + 1].focus();
  };

  const inputFields = [];
  for (let i = 0; i < 4; i++) {
    inputFields.push(
      <input
        type="text"
        key={i}
        ref={(en) => (input.current[i] = en)}
        maxLength={1}
        onChange={() => inputChange(i)}
      />
    );
  }

  return (
    <>
      <div></div>
      {inputFields}
    </>
  );
};

export default OtpCreate;
