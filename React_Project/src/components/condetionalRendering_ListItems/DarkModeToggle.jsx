import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl mb-4">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <button
        onClick={toggleMode}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
