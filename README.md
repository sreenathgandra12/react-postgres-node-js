# React and Node.js Application with PostgreSQL Database
This project is aimed at building a React and Node.js application with a PostgreSQL database. The application is designed to fulfill the following functionalities:
#### Database Initialization:
Upon setup, the application initializes a PostgreSQL database with 50 records.
The records include fields such as "sno", "customer name", "age", "phone", "location", and "created_at" with dummy data.
#### Single Page Application:
The application includes a single page interface to display the data retrieved from the PostgreSQL database.
The data is presented in a table format with search functionality and pagination.Each page displays 20 records.
#### Display of created_at Data:
The created_at column data is presented in two separate columns: "date" and "time".
#### Search Functionality:
Users can search for data based on the "name" or "location" columns.
#### Sorting Options:
Users have the option to sort the displayed data either by "date" or by "time".
#### Setup Instructions:
To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Ensure you have Node.js and PostgreSQL installed.
3. Navigate to the project directory in your terminal.
4. Install the required dependencies by running npm install.
5. Set up the PostgreSQL database with the provided schema and dummy data.
6. Start the Node.js server by running npm start.
7. Open your browser and visit the specified URL to access the application.
#### Dependencies
* React
* Node.js
* Express
* PostgreSQL

