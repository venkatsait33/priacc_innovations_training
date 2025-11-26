import React, { useState } from "react";
import { useEvents } from "../context/EventContext";

const EventForm = () => {
  const { addEvent } = useEvents();
  const [data, setData] = useState({
    title: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.title || !data.date || !data.time) {
      alert("Please fill all the fields");
      return;
    }
    const event = {
      title: data.title,
      time: `${data.date}T${data.time}`,
    };
    addEvent(event);
    setData({
      title: "",
      date: "",
      time: "",
    });
  };
  return (
    <div
      style={{
        border: "3px solid white",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "15px",
          padding: "10px",
          placeContent: "center",
        }}
      >
        <label>
          Add Event{" "}
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Enter Event Title"
          />
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={data.date}
          />
        </label>
        <label>
          Time
          <input
            type="time"
            name="time"
            value={data.time}
            onChange={handleChange}
            placeholder="Enter Event Title"
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EventForm;
