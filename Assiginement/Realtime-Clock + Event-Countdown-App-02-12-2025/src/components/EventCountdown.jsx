import React, { useEffect, useState } from "react";
import { useEvents } from "../context/EventContext";

const EventCountdown = () => {
  const { events, deleteEvent } = useEvents();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateTimeLeft = (target) => {
    const diff = new Date(target) - now;
    if (diff <= 0) return { ended: true };

    return {
      ended: false,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">⏳ Event Countdowns</h3>

      {events?.length === 0 && <p className="text-gray-500">No events yet.</p>}

      {events?.map((event) => {
        const t = calculateTimeLeft(event.time);

        if (t.ended) {
          alert(`⏰ Event "${event.title}" has ended!`);
          deleteEvent(event.id);
          return null;
        }

        return (
          <div key={event.id} className="p-3 border rounded mb-3 bg-base-200">
            <h4 className="font-bold">{event.title}</h4>
            <p>
              {t.days}d {t.hours}h {t.minutes}m {t.seconds}s
            </p>

            <button
              onClick={() => deleteEvent(event.id)}
              className="btn btn-sm btn-error mt-2"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default EventCountdown;
