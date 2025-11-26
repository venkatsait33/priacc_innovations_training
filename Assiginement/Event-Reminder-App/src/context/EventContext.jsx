import { createContext, useContext, useEffect, useRef, useState } from "react";

const EventContext = createContext();
const KEY = "event_data";

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const timeouts = useRef({});

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }, []);

  const showNotification = (ev) => {
    if (!("Notification" in window)) {
      alert(`${ev.title} is happening soon!`);
      return;
    }

    if (Notification.permission === "granted") {
      new Notification("Event Reminder", {
        body: `${ev.title} at ${new Date(ev.time).toLocaleString()}`,
      });
    } else {
      alert(`${ev.title} is happening soon!`);
    }
  };

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    if (!events) return;

    // clear old timers
    Object.values(timeouts.current).forEach(clearTimeout);
    timeouts.current = {};

    const now = Date.now();

    events.forEach((ev) => {
      const eventTime = new Date(ev.time).getTime();
      const notifyTime = eventTime - 60000; // 1 minute before

      // if notify time is already passed, skip
      if (notifyTime <= now) return;

      const delay = notifyTime - now;

      const timerId = setTimeout(() => {
        showNotification(ev);
      }, delay);

      timeouts.current[ev.id] = timerId;
    });
  }, [events]);

  const addEvent = (event) => {
    setEvents((prev) => [...prev, { ...event, id: Date.now() }]);
    console.log(event);
  };
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
