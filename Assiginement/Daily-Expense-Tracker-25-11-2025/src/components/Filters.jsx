const categories = [
  "All",
  "Food",
  "Transport",
  "Bills",
  "Shopping",
  "Entertainment",
  "Other",
];

const Filters = ({ filters, setFilters, clearFilters }) => {
  const handleChange = (e) =>
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="flex flex-wrap gap-3 border-2 rounded-lg p-4 w-full shadow-lg h-50 items-center">
      <label className="label">
        From
        <input
          type="date"
          name="startDate"
          value={filters.startDate || ""}
          onChange={handleChange}
          className="input input-lg"
        />
      </label>

      <label className="label">
        To
        <input
          type="date"
          name="endDate"
          value={filters.endDate || ""}
          onChange={handleChange}
          className="input input-lg"
        />
      </label>

      <label className="label">
        Category
        <select
          className="select"
          name="category"
          value={filters.category || "All"}
          onChange={handleChange}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="label">
        Search
        <input
          className="input"
          type="text"
          name="search"
          placeholder="note or category"
          value={filters.search || ""}
          onChange={handleChange}
        />
      </label>

      <button className="btn  btn-info btn-lg" onClick={clearFilters}>
        Clear
      </button>
    </div>
  );
};

export default Filters;
