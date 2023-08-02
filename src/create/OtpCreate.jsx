import { useRef } from "react";

const OtpCreate = () => {
  const inputRef = useRef([]);

  const inputChangeRef = (id) => {
    console.log("CurrentRef", inputRef.current[id]);

    inputRef.current[id + 1].focus();
  };

  const inputFields = [];
  for (let i = 0; i < 4; i++) {
    inputFields.push(
      <input
        type="text"
        key={i}
        ref={(en) => (inputRef.current[i] = en)}
        maxLength={1}
        onChange={() => inputChangeRef(i)}
      />
    );
  }

  return <>{inputFields}</>;
};

export default OtpCreate;
