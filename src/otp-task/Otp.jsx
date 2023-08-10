// import { useRef } from "react";

// const OtpCreate = () => {
//   const input = useRef([]);
//   const inputFields = [];

//   //   const inputChange = (i) => {
//   //     console.log("CurrentRef", input.current[i]);
//   //     if (i < inputFields.length - 1 && input.current[i].value.length === 1) {
//   //       input.current[i + 1].focus();
//   //     }
//   //   };
//   const inputChange = (i) => {
//     console.log("CurrentRef", input.current[i]);
//     if (i < inputFields.length - 1 && input.current[i].value.length === 1) {
//       input.current[i + 1].focus();
//     }
//   };

//   //   const inputFields = [];
//   for (let i = 0; i < 4; i++) {
//     inputFields.push(
//       <input
//         type="text"
//         key={i}
//         ref={(en) => (input.current[i] = en)}
//         maxLength={1}
//         onChange={() => inputChange(i)}
//       />
//     );
//   }

//   return (
//     <>
//       <div></div>
//       {inputFields}
//     </>
//   );
// };

// export default OtpCreate;

import { useRef } from "react";

const OtpCreate = () => {
  const input = useRef([]);
  const inputFields = [];

  const inputChange = (i) => {
    console.log("CurrentRef", input.current[i]);
    if (i < 3 && input.current[i].value.length === 1) {
      input.current[i + 1].focus();
    } else if (i > 0 && input.current[i].value.length === 0) {
      input.current[i - 1].focus();
    }
  };

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
