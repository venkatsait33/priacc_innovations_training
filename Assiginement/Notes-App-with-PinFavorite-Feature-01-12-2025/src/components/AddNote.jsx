import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";

const AddNote = () => {
  const [note, setNote] = useState("");
  const { addNote } = useNotes();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return alert("Please enter a note");
    addNote(note.trim());
    setNote("");
  };
  return (
    <div className="border-2  rounded-xl p-4">
      <h2 className=" text-xl text-center font-semibold">Add Note</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <label className="label">Enter Here:</label>
          <input
            type="text"
            className=" input input-xl w-full rounded-xl p-2"
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button type="submit" className=" btn btn-lg btn-outline">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNote;
