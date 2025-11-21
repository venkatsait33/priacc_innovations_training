import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const ListOfApplicants = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesName = user.name.toLowerCase().includes(search.toLowerCase());

    const matchesExperience =
      experience === "" || user.experience == experience;

    return matchesName && matchesExperience;
  });

  return (
    <div
      style={{ padding: "20px" }}
      className="w-full flex-col  gap-3 flex justify-center items-center mx-auto h-full mt-4"
    >
      <div className="flex justify-between items-center w-[50%]">
        <button
          onClick={() => navigate(-1)}
          className=" btn btn-sm btn-outline"
        >
          Back
        </button>
        <h2 className=" text-2xl font-semibold">Application List</h2>
        <Link to="/" className=" btn btn-sm btn-primary">
          Home
        </Link>
      </div>

      {/* Search Input */}
      <div className="flex gap-3 m-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-md"
        />

        {/* Filter by Experience */}
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          style={{ padding: "8px" }}
          className="select"
        >
          <option value="">Filter by experience</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5+ years</option>
        </select>
      </div>

      <hr className="m-2" />

      {filteredUsers.length === 0 ? (
        <p>No matching users found.</p>
      ) : (
        <ul className="flex gap-3 flex-col justify-between">
          {filteredUsers.map((user) => (
            <li key={user.id} className="flex gap-3 items-center ">
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Phone:</strong> {user.phone} <br />
              <strong>Experience:</strong> {user.experience} years <br />
              {user.resume && (
                <button onClick={() => window.open(user.resume)}>
                  View Resume
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListOfApplicants;
