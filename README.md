# FarmStand Web App

FarmStand is a simple web application built with Node.js, Express, and MongoDB for managing agricultural products.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running locally

### Installation

1. **Clone the repository:**
   
   ```plaintext
   git clone https://github.com/your-username/farmstand.git
   ```
2. **Navigate to the project directory:**
    ```plaintext
    cd farmstand
    ```

3. **Install Dependencies:**
    ```plaintext
    npm install
    ```

### Start the Application
    node index.js

Open your browser and visit http://localhost:3000/products to see the FarmStand app in action.

### Features
- View products
- Add new products
- Edit existing products
- Delete products
  
### Code Overview
The main application logic is located in index.js. It connects to a MongoDB database, defines a Product model, and sets up routes for CRUD operations on products. The models/product.js file contains the product schema and model definition.

### File Structure
- *index.js*: Main application file with routes and server setup.
- *views/products*: Contains EJS templates for rendering HTML pages.
- *models/product.js*: Defines the product schema and model.
- *seed.js*: Seeds the database with initial product data.

### Technologies Used
1. Node.js
2. Express.js
3. MongoDB

