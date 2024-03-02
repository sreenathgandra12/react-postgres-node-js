// Importing React library
import React from 'react';
// Importing FontAwesome icons for arrow symbols
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// Importing FontAwesomeIcon component for rendering icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CustomerTable.css';
// Functional component for displaying a table of customers
const CustomerTable = ({ customers, searchTerm, sortColumn, sortDirection, handleSort,sortDirectionTwo,handleSortTwo }) => {
  // Filter customers based on search term
  const filteredCustomers = customers.filter(
    customer =>
      customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort customers based on sort column and direction
  const sortedCustomers = filteredCustomers.sort((a, b) => {
    if (sortColumn === 'date') {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortColumn === 'time') {
      const timeA = new Date(a.created_at).getTime();
      const timeB = new Date(b.created_at).getTime();
      return sortDirectionTwo === 'asc' ? timeA - timeB : timeB - timeA;
    } else {
      return 0;
    }
  });
   // Function to render arrow icon based on sort direction
  const arrowIcon = () => {
   
      return sortDirection === 'asc' ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />;
    
  };
  // Function to render arrow icon based on sort direction for the second column
  const arrowIconTwo = () => {
   
    return sortDirectionTwo === 'asc' ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />;
  
};
 // JSX to render the table
  return (
    <div className="customer-table-container" >
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort('sno')}>S No</th>
            <th onClick={() => handleSort('customer_name')}>Customer Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
            <th onClick={() => handleSort('phone')}>Phone Number</th>
            <th onClick={() => handleSort('location')}>Location</th>
            <th onClick={() => handleSort('date')}>Date {arrowIcon()}</th>
            <th onClick={() => handleSortTwo('time')}>Time {arrowIconTwo()}</th>
          </tr>
        </thead>
        <tbody>
          {sortedCustomers.map(customer => (
            <tr key={customer.id}>
              
              <td>{customer.sno}</td>
              <td>{customer.customer_name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>{new Date(customer.created_at).toLocaleDateString()}</td>
              <td>{new Date(customer.created_at).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// Exporting the CustomerTable component
export default CustomerTable;
