// // Stateless
// import { useRef } from "react";

// const WithUserefLoginForm = () => {
//   const nameInputRef = useRef(null);

//   const onShowValue = () => {
//     console.log("UserName: ", nameInputRef.current.value);
//     console.log("password: ", nameInputRef1.current.value);
//   };

//   console.log("Re-Render: ");
//   return (
//     <div>
//       <label>username:</label>
//       <input ref={nameInputRef} type="text" />
//       <label>Password:</label>
//       <input ref={nameInputRef1} type="password" />

//       <button onClick={onShowValue}>Show Value</button>
//     </div>
//   );
// };

// export default WithUserefLoginForm;

//second way
// import { useRef } from "react";

// const WithUserefLoginForm = () => {
//   const nameInputRef = useRef(null);
//   const passwordInputRef = useRef(null);

//   const onShowValue = () => {
//     console.log("UserName: ", nameInputRef.current.value);
//     console.log("Password: ", passwordInputRef.current.value);
//     // nameInputRef.current.value = "";
//     // passwordInputRef.current.value = "";
//   };

//   console.log("Re-Render: ");
//   return (
//     <div>
//       <label>Username:</label>
//       <input ref={nameInputRef} type="text" />
//       <label>Password:</label>
//       <input ref={passwordInputRef} type="password" />

//       <button onClick={onShowValue}>Show Value</button>
//     </div>
//   );
// };

// export default WithUserefLoginForm;

// import { useRef } from "react";

// const WithUserefLoginForm = () => {
//   const inputRef = useRef([]);

//   const onShowValue = () => {
//     console.log("UserName: ", inputRef.current[].value);
//     // console.log("Password: ", inputRef.current.password.value);
//   };

//   console.log("Re-Render: ");
//   return (
//     <div>
//       <label>Username:</label>
//       <input
//         ref={(el) => (inputRef.current[0] = el)}
//         name="username"
//         type="text"
//         // onChange={() => onShowValue(0)}
//       />

//       {/* <label>Password:</label> */}
//       {/* <input ref={inputRef} name="password" type="password" /> */}
//       <label>Password:</label>
//       <input
//         ref={(el) => (inputRef.current[1] = el)}
//         name="password"
//         type="password"
//         // onChange={() => onShowValue(1)}
//       />
//       <button onClick={onShowValue}>Show Value</button>
//     </div>
//   );
// };

// export default WithUserefLoginForm;

import { useRef } from "react";

const WithUserefLoginForm = () => {
  const inputRef = useRef([]);

  const onShowValue = () => {
    console.log("UserName: ", inputRef.current[0].value);
    console.log("Password: ", inputRef.current[1].value);
  };

  console.log("Re-Render: ");
  return (
    <div>
      <label>Username:</label>
      <input
        ref={(el) => (inputRef.current[0] = el)}
        name="username"
        type="text"
        // onChange={() => onShowValue(0)}
      />

      <label>Password:</label>
      <input
        ref={(el) => (inputRef.current[1] = el)}
        name="password"
        type="password"
        // onChange={() => onShowValue(1)}
      />
      <button onClick={onShowValue}>Show Value</button>
    </div>
  );
};

export default WithUserefLoginForm;
