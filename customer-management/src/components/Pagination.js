// Importing React library
import React from 'react';

/**
* A functional component that renders a pagination for a list of customers.
* It receives the following props:
* 1. `customersPerPage`: The number of customers displayed per page.
* 2. `totalPages`: The total number of pages required for the entire list of customers.
* 3. `paginate`: A callback function that is triggered when a page number is clicked,
*                updating the current page in the parent component.
*
* The component creates a list of page numbers based on the `totalPages` value,
* rendering them as clickable links. When a page number is clicked, the `paginate`
* function is invoked with the clicked page number as an argument.
*/

const Pagination = ({ customersPerPage, totalPages,paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <=totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
     {/* Map through the pageNumbers array and render each page number as a list item */}
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
           {/* Render each page number as a clickable link that triggers the paginate callback */}
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

