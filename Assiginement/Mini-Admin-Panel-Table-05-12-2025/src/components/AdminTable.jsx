import { useEffect, useState } from "react";
import Table from "./Table";

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
      setFiltered(data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let temp = [...users];

    if (search.trim()) {
      temp = temp.filter((u) =>
        u.firstName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (gender !== "all") {
      temp = temp.filter((u) => u.gender === gender);
    }

    if (sortBy === "name") {
      temp.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortBy === "age") {
      temp.sort((a, b) => a.age - b.age);
    } else if (sortBy === "email") {
      temp.sort((a, b) => a.email.localeCompare(b.email));
    }

    setFiltered(temp);
  }, [search, gender, sortBy, users]);

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filtered.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center"> Admin Panel</h2>
      <div className=" divider"></div>

      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered"
        />

        <select
          className="select select-bordered"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="all">All Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          className="select select-bordered"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="email">Email</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center text-4xl loading"></div>
      ) : (
        <Table
          paginatedData={paginatedData}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      )}

      <div className="flex justify-center mt-4 gap-2">
        <button
          className="btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span className="text-lg font-semibold">
          Page {page} / {totalPages}
        </span>

        <button
          className="btn"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminTable;
