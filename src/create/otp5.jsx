import { useState } from "react";

const OtpCreate = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputChangeHandler = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div>
      {otp.map((digit, index) => (
        <input
          type="text"
          key={index}
          value={digit}
          maxLength={1}
          onChange={(e) => inputChangeHandler(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default OtpCreate;
