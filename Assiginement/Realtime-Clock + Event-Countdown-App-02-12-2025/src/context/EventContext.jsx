import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();
const STORAGE_KEY = "event_countdown_app";

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [initialized, setInitialized] = useState(false);

  // Load saved events
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setEvents(JSON.parse(saved));
    setInitialized(true);
  }, []);

  // Save events only AFTER loading
  useEffect(() => {
    if (initialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    }
  }, [events, initialized]);

  const addEvent = (eventObj) => {
    setEvents((prev) => [...prev, eventObj]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
