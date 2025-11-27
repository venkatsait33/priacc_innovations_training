import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();
const LOCAL_KEY = "notes_app_v1";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch (e) {
        console.log("Error parsing notes", e);
      }
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(notes));
    }
  }, [notes, initialized]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, { ...note, id: Math.random() }]);
  };

  const updateNote = (id, updatedNote) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? updatedNote : note))
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        editing,
        setEditing,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
