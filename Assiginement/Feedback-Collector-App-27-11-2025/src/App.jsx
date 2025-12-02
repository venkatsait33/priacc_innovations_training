import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackDashboard from "./components/FeedbackDashboard";

const App = () => {
  const [newSignal, setNewSignal] = useState(0);

  const handleAdd = (item) => {
    // when FeedbackForm saves successfully it calls onAdd
    // trigger dashboard reload
    setNewSignal((s) => s + 1);
  };
  return (
    <div className=" flex flex-col w-full h-full mx-auto justify-center container gap-3">
      <h1 className="text-2xl font-semibold text-center m-4">Feedback App</h1>
      <div>
        <FeedbackForm onAdd={handleAdd} />
      </div>

      <div>
        <FeedbackDashboard newItemSignal={newSignal} />
      </div>
    </div>
  );
};

export default App;
