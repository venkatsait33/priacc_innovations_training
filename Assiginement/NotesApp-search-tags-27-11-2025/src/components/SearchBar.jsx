import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Notes...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-lg"
      />
    </div>
  );
};

export default SearchBar;
