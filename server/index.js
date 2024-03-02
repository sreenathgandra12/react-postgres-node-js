// Importing the Express framework
const express=require("express");
// Importing the Express framework
const app = express();
// Importing the CORS middleware
const cors=require("cors");
//Importing the router module
const customersRouter = require('./router');


// Using CORS middleware to allow cross-origin requests
app.use(cors());
// Parsing incoming request bodies as JSON
app.use(express.json());


app.use('/api/customers', customersRouter);

const PORT = process.env.PORT || 5000;
// Starting the server and listening on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
