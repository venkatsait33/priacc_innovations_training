import React from "react";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/themeContext";

const App = () => {
  const { initialized } = useTheme();

  if (!initialized) return <div>Loading theme...</div>;
  return (
    <div className=" container max-w-6xl mx-auto p-4">
      <Navbar />
      <h1 className="text-3xl font-bold mt-9 text-center">
        Theme Toggle Example
      </h1>
    </div>
  );
};

export default App;
