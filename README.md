# M324 Abschlussprojekt

This project is a simple Todo application built with a React frontend and an Express backend. The application allows users to add, delete, and toggle the completion status of todo items.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend

1. Navigate to the backend directory:

   ```bash
   cd /Users/susietsow/M324/M324-Abschlussprojekt/backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string:

   ```env
   MONGO_URI=mongodb://localhost:27017/todos
   PORT=5001
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd /Users/susietsow/M324/M324-Abschlussprojekt/frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You can add a new todo by typing in the input field and clicking the "add" button.
3. You can toggle the completion status of a todo by clicking the checkbox.
4. You can delete a todo by clicking the "delete" button.

## API Endpoints

### GET /api/todos

Retrieve all todos.

### POST /api/todos

Create a new todo.

- Request body:
  ```json
  {
    "title": "Your todo title"
  }
  ```

### PATCH /api/todos/:id/toggle

Toggle the completion status of a todo.

### DELETE /api/todos/:id

Delete a todo.

## CI/CD Pipeline

1. **Linting and Formatting**:

   - The project follows coding standards using **ESLint** and **Prettier**.

2. **Continuous Deployment**:
   - The project is deployed on **Render**.
   - Every push to the `main` branch triggers an automatic deployment.

## Dependencies

### Backend

- **Node.js** (18+)
- **Express.js**
- **MongoDB** + **Mongoose**
- **dotenv** (Environment Variables)

### Frontend

- **React 18+**
- **React Router**
- **Axios** (API Requests)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
