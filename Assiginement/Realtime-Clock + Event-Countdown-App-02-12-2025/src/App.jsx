import React from "react";
import { EventProvider } from "./context/EventContext";
import Clock from "./components/Clock";
import AddEvent from "./components/AddEvent";
import EventCountdown from "./components/EventCOuntdown";

const App = () => {
  return (
    <>
      <EventProvider>
        <div className="max-w-xl mx-auto mt-10 p-4">
          <h1 className="text-2xl font-semibold text-center m-4">
            complete Realtime Clock + Event Countdown App
          </h1>
          <Clock />
          <AddEvent />
          <EventCountdown />
        </div>
      </EventProvider>
    </>
  );
};

export default App;
