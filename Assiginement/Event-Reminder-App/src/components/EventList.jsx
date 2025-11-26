import React from "react";
import { useEvents } from "../context/EventContext";

const EventList = () => {
  const { events, deleteEvent } = useEvents();
  return (
    <div style={{}}>
      <h3>Upcoming Events</h3>

      {events.length === 0 && <p>No events added.</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((ev) => (
          <li
            key={ev.id}
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong>{ev.title}</strong> <br />
            {new Date(ev.time).toLocaleString()}
            <br />
            <button onClick={() => deleteEvent(ev.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
