import { useParams, useNavigate } from "react-router-dom";

const studentData = {
  1: { name: "Aishwarya", course: "React", marks: 95, batch: "A" },
  2: { name: "Chaitanya", course: "Node.js", marks: 88, batch: "B" },
  3: { name: "Dinesh", course: "Python", marks: 90, batch: "C" },
};

const StudentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = studentData[id];
  return (
    <div>
      <div className="text-center mt-10">
        <h2>🎓 {student.name}</h2>
        <p>Course: {student.course}</p>
        <p>Marks: {student.marks}</p>
        <p>Batch: {student.batch}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-500 text-white px-3 py-1 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default StudentDetailsPage;
