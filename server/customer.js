// Importing the database connection module
const db=require("./db");

// Defining the Customer class
class Customer {
     // Method to create a new customer
    static async createCustomer(customer_name, age, phone, location) {
        // SQL query to insert a new customer record into the database
        const query = 'INSERT INTO customers (customer_name, age, phone, location, created_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *';
         // Array of parameter values for the query
        const values = [customer_name, age, phone, location];
        // Executing the query and returning the newly created customer
        const { rows } = await db.query(query, values);
        return rows[0];
    }
     // Method to retrieve all customers from the database
    static async getAllCustomers() {
      // SQL query to select all customer records from the database
      const query = 'SELECT * FROM customers';
      // Executing the query and returning the list of customers
      const { rows } = await db.query(query);
      return rows;
    }
    // Method to search for customers based on a query string
    static async searchCustomers(queryString) {
      // SQL query to search for customers based on customer name or location
      const query = 'SELECT * FROM customers WHERE LOWER(customer_name) LIKE $1 OR LOWER(location) LIKE $1';
      // Executing the query with the provided query string and returning the matching customers
      const { rows } = await db.query(query, [`%${queryString.toLowerCase()}%`]);
      return rows;
    }
     // Method to retrieve customers sorted by date of creation
    static async sortCustomersByDate() {
      const query = 'SELECT * FROM customers ORDER BY created_at::date';
      const { rows } = await db.query(query);
      return rows;
    }
   // Method to retrieve customers sorted by time of creation
    static async sortCustomersByTime() {
      const query = 'SELECT * FROM customers ORDER BY created_at::time';
      const { rows } = await db.query(query);
      return rows;
    }
    static async getTotalCustomer() {
      const query = 'SELECT COUNT(*) FROM customers';
      const { rows } = await db.query(query);
      return rows[0].count;
  }
  
  static async deleteCustomerByName(customerName) {
    // SQL query to find a customer record by name and delete it
    const query = 'DELETE FROM customers WHERE customer_name = $1 RETURNING *';
    // Array of parameter values for the query
    const values = [customerName];
    // Executing the query and returning the deleted customer
    const { rows } = await db.query(query, values);
    return rows[0];
  }
}
// Exporting the Customer class for use in other modules
module.exports=Customer;