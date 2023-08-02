import { useState } from "react";

const WithUserefLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onShowValue = () => {
    console.log("UserName: ", username);
    console.log("Password: ", password);
    // setUsername("");
    // setPassword("");
  };

  console.log("Re-Render: ");
  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={onShowValue}>Show Value</button>
    </div>
  );
};

export default WithUserefLoginForm;
