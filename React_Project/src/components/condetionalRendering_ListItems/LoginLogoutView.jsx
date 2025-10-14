import React, { useState } from "react";

const LoginLogoutView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {isLoggedIn ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-green-600">Welcome back!</h2>
          <button
            onClick={toggleLogin}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Please log in.</h2>
          <button
            onClick={toggleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default LoginLogoutView;
