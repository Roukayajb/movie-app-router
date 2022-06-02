import React, { useState, useEffect } from "react";
import RatingInput from "./RatingInput";
function Search({ onSearch }) {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);

  useEffect(() => {
    onSearch({ rate, search });
  }, [rate, search]);

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        onChange={(e) => setSearch(e.target.value.trim())}
        type="search"
        placeholder="Search your movie"
        aria-label="Search"
      />
      <RatingInput onChange={(r) => setRate(r)} />
    </form>
  );
}

export default Search;
