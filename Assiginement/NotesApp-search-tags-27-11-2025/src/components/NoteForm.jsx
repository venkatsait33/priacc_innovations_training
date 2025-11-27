import React, { useEffect, useState } from "react";
import { useNotes } from "../context/NotesContext";

const NoteForm = () => {
  const { editing, addNote, updateNote, setEditing } = useNotes();
  const [data, setData] = useState({
    text: "",
    tag: "work",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (editing) {
      setData({ text: editing.text, tag: editing.tag });
    } else {
      setData({
        text: "",
        tag: "Work",
      });
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.text.trim()) return;

    if (editing) {
      updateNote(editing.id, data);
      setEditing(null);
    } else {
      addNote(data);
    }
    setData({
      text: "",
      tag: "Work",
    });
  };

  return (
    <div className="form">
      <h3 style={{ fontSize: "22px" }}>{editing ? "Edit Note" : "Add Note"}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label className="label">Add Text</label>
          <textarea
            cols="30"
            rows="10"
            onChange={handleChange}
            name="text"
            value={data.text}
            className="textarea"
          ></textarea>
        </div>
        <select className="select" value={data.tag} onChange={handleChange}>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="urgent">Urgent</option>
        </select>
        <button type="submit" className="btn btn-lg btn-outline">
          {editing ? "Update" : "Add"}
        </button>

        {editing && (
          <button
            type="button"
            style={{ marginLeft: 10 }}
            onClick={() => setEditing(null)}
            className=" btn btn-error"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
