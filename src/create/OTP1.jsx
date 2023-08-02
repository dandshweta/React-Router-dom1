import { useState, useRef } from "react";

const OtpCreate = () => {
  const inputRef = useRef([]);
  const [otp, setOtp] = useState(Array(4).fill(""));

  const inputChangeRef = (id, value) => {
    if (value.length === 1 && id < 3) {
      inputRef.current[id + 1].focus();
    }
    const newOtp = [...otp];
    newOtp[id] = value;
    setOtp(newOtp);
  };

  const inputFields = [];
  for (let i = 0; i < 4; i++) {
    inputFields.push(
      <input
        type="text"
        key={i}
        value={otp[i]}
        ref={(el) => (inputRef.current[i] = el)}
        maxLength={1}
        onChange={(e) => inputChangeRef(i, e.target.value)}
      />
    );
  }

  return <>{inputFields}</>;
};

export default OtpCreate;

// import React, { useRef } from "react";

// const OTPDisplay = () => {
//   const inputRefs = [];

//   const handleInputChange = (index, event) => {
//     const { value } = event.target;
//     if (value && index < 5) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   for (let index = 0; index < 6; index++) {
//     inputRefs.push(useRef(null));
//   }

//   return (
//     <div>
//       {inputRefs.map((inputRef, index) => (
//         <input
//           key={index}
//           ref={inputRef}
//           type="text"
//           maxLength={1}
//           onChange={(event) => handleInputChange(index, event)}
//           style={{
//             width: '40px',
//             height: '40px',
//             textAlign: 'center',
//             fontSize: '20px',
//             margin: '5px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default OTPDisplay;
