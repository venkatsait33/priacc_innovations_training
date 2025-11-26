import React, { useEffect } from "react";
import { EventProvider } from "./context/EventContext";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

const App = () => {
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "24px auto", padding: 12 }}>
      <h1>Event Reminder App</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20 }}
      >
        <div>
          <EventProvider>
            <EventForm />
            <EventList />
          </EventProvider>
        </div>
      </div>

      <aside style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
        <h3>Info</h3>
        <p>
          Notifications will be sent 1 minute before the event time when the
          page is open.
        </p>
        <p>If notifications are blocked, the app will show an alert instead.</p>
      </aside>
    </div>
  );
};

export default App;
