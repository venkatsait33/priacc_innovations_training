import React from "react";
import HomePage from "./pages/HomePage";
import { NotesProvider } from "./context/NotesContext";

const App = () => {
  return (
    <div className=" container max-w-5xl flex mx-auto w-full h-full p-10 flex-col items-center justify-center">
      <NotesProvider>
        <HomePage />
      </NotesProvider>
    </div>
  );
};

export default App;
