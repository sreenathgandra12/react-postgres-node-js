// Importing React library
import React from 'react';
// Functional component for the search bar
const SearchBar = ({ setSearchTerm }) => {
  const handleChange = event => {
    // Event handler for input change
    setSearchTerm(event.target.value);
  };
// JSX to render the search bar
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search customers..."
        onChange={handleChange}
      />
    </div>
  );
};
// Exporting the SearchBar component
export default SearchBar;
