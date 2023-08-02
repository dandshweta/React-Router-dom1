// const OTPdisplay = () => {
//   return (
//     <>
//       <div>OTPdisplay</div>
//       <input type="text" />
//       <input type="text" />
//       <input type="text" />
//       <input type="text" />
//     </>
//   );
// };
// export default OTPdisplay;
/****************************************** */
// import { useRef } from "react";

// const OTPdisplay = () => {
//   // Create refs for each input element
//   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   // Function to focus the next input after entering a value
//   const focusNextInput = (index) => {
//     if (index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   // Event handler to handle input changes and move focus to the next input
//   const handleInputChange = (e, index) => {
//     const value = e.target.value;
//     // Assuming you want to move to the next input after a value is entered
//     if (value.length === 1) {
//       focusNextInput(index);
//     }
//     // You can add further logic if needed, e.g., moving to the previous input on backspace
//   };

//   return (
//     <>
//       <div>OTPdisplay</div>
//       {inputRefs.map((inputRef, index) => (
//         <input
//           key={index}
//           type="text"
//           ref={inputRef}
//           maxLength={1}
//           onChange={(e) => handleInputChange(e, index)}
//         />
//       ))}
//     </>
//   );
// };

// export default OTPdisplay;

/************************************* */

// import { useRef } from "react";

// const OTPdisplay = () => {
//   const inputRefs = [];

//   // Create refs for each input element and store them in the inputRefs array
//   for (let i = 0; i < 4; i++) {
//     inputRefs[i] = useRef(null);
//   }

//   // Function to focus the next input after entering a value
//   const focusNextInput = (index) => {
//     if (index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   // Event handler to handle input changes and move focus to the next input
//   const handleInputChange = (e, index) => {
//     const value = e.target.value;
//     // Assuming you want to move to the next input after a value is entered
//     if (value.length === 1) {
//       focusNextInput(index);
//     }
//     // You can add further logic if needed, e.g., moving to the previous input on backspace
//   };

//   return (
//     <>
//       <div>OTPdisplay</div>
//       {/* Render input elements using the for loop */}
//       {inputRefs.map((inputRef, index) => (
//         <input
//           key={index}
//           type="text"
//           ref={inputRef}
//           maxLength={1}
//           onChange={(e) => handleInputChange(e, index)}
//         />
//       ))}
//     </>
//   );
// };

// export default OTPdisplay;
/*************************************************************************** */

import { useRef } from "react";

const OTPDisplay = () => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength={1}
          onChange={(event) => handleInputChange(index, event)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "20px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPDisplay;
