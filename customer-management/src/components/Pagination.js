/*// Importing React library
import React from 'react';
// Functional component for pagination
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  // Array to store page numbers
  const pageNumbers = [];
 // Loop to generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
 // JSX to render pagination
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button
              className={`page-link ${currentPage === number ? 'active' : ''}`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Exporting the Pagination component
export default Pagination;*/


import React from 'react';

const Pagination = ({ customersPerPage, totalPages,paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <=totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

