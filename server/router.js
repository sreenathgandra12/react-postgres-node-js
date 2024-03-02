//Importing the Express framework ,creating a router instance and Importing the customer model
const express = require('express');
const router = express.Router();
const Customer=require("./customer");


// Endpoint for creating a new customer
router.post('/', async (req, res) => {
  // Destructuring request body to extract necessary data
    const { customer_name, age, phone, location } = req.body;
  
    try {
      // Creating a new customer using the Customer model
      const newCustomer = await Customer.createCustomer(customer_name, age, phone, location);
      // Sending the newly created customer as a JSON response
      res.status(201).json(newCustomer);
    } catch (error) {
      // Handling errors if any occur during customer creation
      console.error('Error creating customer:', error);
      res.status(500).json({ message: 'Server Error' });
    }
});
// Endpoint for retrieving all customers
router.get('/', async (req, res) => {
    try {
      // Fetching all customers using the Customer model
      const customers = await Customer.getAllCustomers();
      // Sending the list of customers as a JSON response
      res.json(customers);
    } catch (error) {
      console.error('Error fetching customers:', error);
      res.status(500).json({ message: 'Server Error' });
    }
});
// Endpoint for searching customers based on a query string
router.get('/search', async (req, res) => {
   // Extracting the query string from the request URL
    const queryString = req.query.q;
    try {
      // Searching customers based on the provided query string using the Customer model
      const customers = await Customer.searchCustomers(queryString);
      // Sending the matching customers as a JSON response
      res.json(customers);
    } catch (error) {
      console.error('Error searching customers:', error);
      res.status(500).json({ message: 'Server Error' });
    }
});
// Endpoint for sorting customers by date
router.get('/sort/date', async (req, res) => {
    try {
      // Sorting customers by date using the Customer model
      const customers = await Customer.sortCustomersByDate();
       // Sending the sorted customers as a JSON response
      res.json(customers);
    } catch (error) {
      console.error('Error sorting customers by date:', error);
      res.status(500).json({ message: 'Server Error' });
    }
});
/*
router.get('/api/customers', async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1; // Page number, default to 1
      const limit = 20; // Number of items per page, default to 10

      const offset = (page - 1) * limit; // Calculate offset

      const customers = await Customer.getAllCustomersPaginated(offset, limit);
      res.json(customers);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});*/


router.get('/api/customers', async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Current page number
  const limit = parseInt(req.query.limit) || 20; // Number of items per page

  try {
    const offset = (page - 1) * limit;

    const result = await pool.query(
      'SELECT * FROM customers LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    const customers = result.rows;
    const totalPages = Math.ceil(await getTotalCustomers() / limit);

    res.status(200).json({ customers, totalPages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/sort/time', async (req, res) => {
    try {
       // Sorting customers by time using the Customer model
      const customers = await Customer.sortCustomersByTime();
      // Sending the sorted customers as a JSON response
      res.json(customers);
    } catch (error) {
      console.error('Error sorting customers by time:', error);
      res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/api/customers', async (req, res) => {
  const customerName = req.query.name;
  try {
    // Deleting the customer with the given name
    const deletedCustomer = await Customer.deleteCustomerByName(customerName);
    // Sending a success response with the deleted customer
    res.status(200).json(deletedCustomer);
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});



// Exporting the router module for use in other files
module.exports = router;