import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();
const STORAGE_KEY = "NOTES_APP";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setNotes(JSON.parse(saved));
      }
    } catch (error) {
      console.log(error);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
  }, [notes, initialized]);

  const addNote = (note) => {
    setNotes((prev) => [{ id: Date.now(), note, isPinned: false }, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
  };

  const editNote = (id, newNote) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, note: newNote } : note))
    );
  };
  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, editNote, togglePin }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
