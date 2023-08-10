// import { useRef } from "react";

// const OtpCreate = () => {
//   const inputRef = useRef([]);

//   const inputChangeRef = (id) => {
//     console.log("CurrentRef", inputRef.current[id]);

//     inputRef.current[id + 1].focus();
//   };

//   const inputFields = [];
//   for (let i = 0; i < 4; i++) {
//     inputFields.push(
//       <input
//         type="text"
//         key={i}
//         ref={(en) => (inputRef.current[i] = en)}
//         maxLength={1}
//         onChange={() => inputChangeRef(i)}
//       />
//     );
//   }

//   return <>{inputFields}</>;
// };

// export default OtpCreate;
import { useState, useRef } from "react";

const OtpCreate = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = useRef([]);

  const inputChangeHandler = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < 3) {
      inputRef.current[index + 1].focus();
    }
  };

  const inputFields = [];
  for (let i = 0; i < 4; i++) {
    inputFields.push(
      <input
        type="text"
        key={i}
        value={otp[i]}
        maxLength={1}
        ref={(el) => (inputRef.current[i] = el)}
        onChange={(e) => inputChangeHandler(i, e.target.value)}
      />
    );
  }

  return <div>{inputFields}</div>;
};

export default OtpCreate;
