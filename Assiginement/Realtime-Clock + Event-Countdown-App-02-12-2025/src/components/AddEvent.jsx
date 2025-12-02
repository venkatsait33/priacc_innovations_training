import React, { useState } from "react";
import { useEvents } from "../context/EventContext";

const AddEvent = () => {
  const { addEvent } = useEvents();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !time) return alert("Fill all fields!");

    const dateTime = new Date(`${date}T${time}`);

    addEvent({
      id: Date.now(),
      title,
      time: dateTime.toISOString(),
    });

    setTitle("");
    setDate("");
    setTime("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
        <h3 className="text-xl font-semibold mb-2">Add Event</h3>

        <input
          className="input input-bordered w-full mb-2"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="input input-bordered w-full mb-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="input input-bordered w-full mb-2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button className="btn btn-primary w-full">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
