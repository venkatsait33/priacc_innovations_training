import React from "react";
import { useNavigate } from "react-router-dom";

const TravelApp = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-10">
      <h1>🌍 City Travel Guide</h1>
      <button
        onClick={() => navigate("/travel/city")}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Explore Cities
      </button>
    </div>
  );
};

export default TravelApp;
