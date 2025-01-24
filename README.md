**Customer Management API**


This is a simple backend API for managing customer data. It allows users to register, login, and perform CRUD operations on customers. The API includes authentication using JWT (JSON Web Tokens) and uses Sequelize ORM to interact with the database.


**Features**


User Authentication: Register and login using JWT authentication.
CRUD Operations for Customers: Create, Read, Update, and Delete customer records.
Unique Customer Identification: Customers are identified by a unique ID.
Data Validation: Ensures all customer data is properly validated.

**Technologies Used**

  Node.js: JavaScript runtime used to build the API.
  Express.js: Web framework for building the API.
  Sequelize: ORM for interacting with the SQLite database.
  SQLite: Lightweight database for storing customer data.
  JWT (JSON Web Token): For secure authentication and authorization.

**Installation**

Prerequisites:

Node.js and npm should be installed on your system.

**Steps**
         1.Clone the repository:
    
                git clone https://github.com/your-username/your-repository-name.git
                cd your-repository-name
        
                npm install
          
  2.Create a .env file in the root of the project and add the following environment variables:
      
              DB_NAME=crm-database.db
              JWT_SECRET=your_secret_key
              PORT=3000
    
  3. Run the application:
            npm start




**Environment Variables**
  The application requires the following environment variables:
    
   JWT_SECRET: A secret key for JWT authentication.
    DB_NAME: The name of the SQLite database file (e.g., crm-database.db).
    PORT: The port on which the server will run (default is 3000).
