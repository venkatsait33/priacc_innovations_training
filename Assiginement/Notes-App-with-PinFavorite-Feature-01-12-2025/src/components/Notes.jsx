import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";

const Notes = () => {
  const { notes, deleteNote, togglePin, editNote } = useNotes();
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  // Sort notes: pinned first
  const sortedNotes = [...notes].sort((a, b) => b.isPinned - a.isPinned);

  // Search filter
  const filteredNotes = sortedNotes.filter((n) =>
    n?.note?.toLowerCase()?.includes(search.toLowerCase())
  );

  return (
    <div className=" flex flex-col gap-3 border-2 rounded-xl p-4 border-gray-400 shadow-xl bg-gray-700">
      <h2 className="text-xl font-semibold mb-2">Your Notes</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notes..."
        className="input input-bordered w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Notes List */}
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className="border p-4 rounded mb-3 flex justify-between items-center bg-base-200"
        >
          {/* Editing Mode */}
          {editingId === note.id ? (
            <input
              className="input input-sm w-full"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <p className="flex-1">{note.note}</p>
          )}

          <div className="flex gap-2 ml-4">
            {/* Pin/Unpin */}
            <button
              onClick={() => togglePin(note.id)}
              className="btn btn-xs btn-warning"
            >
              {note.isPinned ? "Unpin" : "Pin"}
            </button>

            {/* Edit */}
            {editingId === note.id ? (
              <button
                className="btn btn-xs btn-success"
                onClick={() => {
                  editNote(note.id, newText);
                  setEditingId(null);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="btn btn-xs"
                onClick={() => {
                  setEditingId(note.id);
                  setNewText(note.note);
                }}
              >
                Edit
              </button>
            )}

            {/* Delete */}
            <button
              className="btn btn-xs btn-error"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {filteredNotes.length === 0 && (
        <p className="text-center text-gray-500">No notes found.</p>
      )}
    </div>
  );
};

export default Notes;
