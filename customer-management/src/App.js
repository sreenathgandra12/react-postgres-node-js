import axios from 'axios'; // Importing Axios for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'; // Importing necessary React components
import './App.css';
import Pagination from './components/Pagination'; // Importing Pagination component
import SearchBar from './components/SearchBar'; // Importing SearchBar component
import CustomerTable from './components/customertable'; // Importing CustomerTable component


// Function component for the main application
function App() {
  // State variables for managing customers data, search term, pagination, and sorting
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage=20;
  const[totalPages,setTotalPages]=useState(0);
  const [sortColumn, setSortColumn] = useState('date');
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortDirectionTwo, setSortDirectionTwo] = useState('asc');
 // Effect hook to fetch data from the server on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customers');
        setCustomers(response.data);
        setTotalPages(Math.ceil(response.data.length/customersPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastRecord = currentPage * customersPerPage;
  const indexOfFirstRecord = indexOfLastRecord - customersPerPage;
  const currentRecords = customers.slice(indexOfFirstRecord, indexOfLastRecord);
  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



 // Function to handle sorting by a single column
  const handleSort = (column) => {
    // If the same column is clicked, toggle the sorting direction
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If a different column is clicked, set the new sort column and default sorting direction to ascending
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
// Function to handle sorting by the second column
  const handleSortTwo = (column) => {
    // If the same column is clicked, toggle the sorting direction
    if (column === sortColumn) {
      setSortDirectionTwo(sortDirectionTwo === 'asc' ? 'desc' : 'asc');
    } else {
      // If a different column is clicked, set the new sort column and default sorting direction to ascending
      setSortColumn(column);
      setSortDirectionTwo('asc');
    }
  };
// JSX to render the main application
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Customer Management</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CustomerTable
        customers={currentRecords}
        searchTerm={searchTerm}
       // currentPage={currentPage}
       // customersPerPage={customersPerPage}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        handleSort={handleSort} 
        handleSortTwo={handleSortTwo}
        sortDirectionTwo={sortDirectionTwo}
        //currentRecords={currentRecords}
      />
      {/* Rendering the Pagination component and passing necessary props */}
      <Pagination
      customersPerPage={customersPerPage}
      totalPages={totalPages}
      paginate={paginate}

      />
    </div>
  );
}
// Exporting the App component
export default App;
