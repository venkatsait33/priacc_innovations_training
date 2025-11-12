import React from "react";
import { useNavigate } from "react-router-dom";

const StudentHomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-10">
      <h1>🎓 Student Info Viewer</h1>
      <button
        onClick={() => navigate("/students/list")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        View Students
      </button>
    </div>
  );
};

export default StudentHomePage;
