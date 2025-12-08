const Table = ({ paginatedData, selectedRow, setSelectedRow }) => {
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200">
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((u) => (
            <tr
              key={u.id}
              className={`cursor-pointer ${
                selectedRow === u.id ? "bg-yellow-200" : ""
              }`}
              onClick={() => setSelectedRow(u.id)}
            >
              <td>{u.id}</td>
              <td>
                {u.firstName} {u.lastName}
              </td>
              <td>{u.age}</td>
              <td>{u.email}</td>
              <td>{u.gender}</td>
            </tr>
          ))}

          {paginatedData.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
