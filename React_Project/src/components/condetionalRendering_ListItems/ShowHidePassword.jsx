import React, { useState } from "react";

const ShowHidePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        className="border p-2 rounded-lg mb-3"
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default ShowHidePassword;
