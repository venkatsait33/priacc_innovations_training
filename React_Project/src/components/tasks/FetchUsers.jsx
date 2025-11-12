import React, { useEffect, useState } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users List</h1>
      {users.map((user) => (
        <div key={user.id} className="border p-2 mb-2 rounded">
          <p>
            <b>{user.name}</b>
          </p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchUsers;
