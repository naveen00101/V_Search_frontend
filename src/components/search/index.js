import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./index.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Search Query"
        className="search-container"
      />
      <button className="s-btn" type="submit" onClick={handleSearch}>
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
