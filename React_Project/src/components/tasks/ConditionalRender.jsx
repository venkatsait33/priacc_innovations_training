import React, { useState } from "react";

const ConditionalRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="text-center p-4">
      <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default ConditionalRender;
