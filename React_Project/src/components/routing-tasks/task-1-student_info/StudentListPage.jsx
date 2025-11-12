import React from "react";
import { useNavigate } from "react-router-dom";

const students = [
  { id: 1, name: "Aishwarya" },
  { id: 2, name: "Chaitanya" },
  { id: 3, name: "Dinesh" },
];
const StudentListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h2>📋 Student List</h2>
      <ul className="mt-4">
        {students.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => navigate(`/students/${s.id}`)}
              className="text-blue-600 underline"
            >
              {s.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;
