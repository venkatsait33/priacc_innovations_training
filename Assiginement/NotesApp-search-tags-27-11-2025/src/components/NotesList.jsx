import { useNotes } from "../context/NotesContext";

const NotesList = ({ search }) => {
  const { notes, deleteNote, setEditing } = useNotes();

  const filteredNotes = notes.filter(
    (n) =>
      n.text.toLowerCase().includes(search.toLowerCase()) ||
      n.tag.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      {filteredNotes.length === 0 && <p>No notes found.</p>}

      {filteredNotes.map((note) => (
        <div
          key={note.id}
          style={{
            padding: 12,
            marginBottom: 10,
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        >
          <h4>{note.tag.toUpperCase()}</h4>
          <p>{note.text}</p>

          <button onClick={() => setEditing(note)}>Edit</button>
          <button
            style={{ marginLeft: 10 }}
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
