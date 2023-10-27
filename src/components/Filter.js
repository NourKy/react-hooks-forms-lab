import React, { useState } from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {
  const [searchText, setSearchText] = useState(search);

  // Update the search text state when the input changes
  const handleSearchChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText);

    // Call the onSearchChange callback to inform the parent component about the change
    onSearchChange(newText);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleSearchChange}
        value={searchText} // Connect the input to the search text state
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
