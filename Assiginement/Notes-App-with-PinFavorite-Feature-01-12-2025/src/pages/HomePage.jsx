import React from "react";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";

const HomePage = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-center mt-10">
        Notes App with Pin Favorite Notes
      </h1>

      <div className=" flex flex-col gap-3 mt-4">
        <AddNote />
        <Notes />
      </div>
    </div>
  );
};

export default HomePage;
