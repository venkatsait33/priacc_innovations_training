import React from "react";

const StudentsResultList = () => {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Priya", marks: 42 },
    { id: 3, name: "Karan", marks: 73 },
    { id: 4, name: "Sneha", marks: 30 },
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Passed Students</h2>
      <ul>
        {students
          .filter((student) => student.marks >= 50)
          .map((student) => (
            <li key={student.id} className="py-2 text-green-600">
              {student.name} — Marks: {student.marks}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StudentsResultList;
