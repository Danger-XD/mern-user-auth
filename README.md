# MERN User Auth

**MERN User Auth** is a complete authentication system built with the MERN stack. It implements modern authentication techniques using **JWT (JSON Web Tokens)** for session management, **Joi** for input validation, and **bcrypt** for password hashing. The frontend leverages **Vite** for fast development and build performance, features private routing for securing sensitive pages, and uses **Zustand** for efficient state management. Authentication tokens are securely handled using cookies to improve security and user experience.

---

## Features

### Backend
- **JWT Authentication**: Secure and stateless session management.
- **Input Validation**: Form validation using **Joi** to ensure data integrity.
- **Password Hashing**: Passwords are securely hashed with **bcrypt** before storing in the database.
- **Express.js**: A robust and scalable backend powered by Express.
- **MongoDB**: Stores user data and session details efficiently.

### Frontend
- **Vite**: Lightning-fast frontend tooling for React.
- **Private Routing**: Secures restricted pages with authentication checks.
- **State Management**: Simplified and centralized state management using **Zustand**.
- **Cookie-Based Token Handling**: Tokens are securely managed in HTTP-only cookies to prevent XSS attacks.

---

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mern-user-auth.git
   cd mern-user-auth
   ```
2. Install dependencies for both frontend and backend:
    ```
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```
3. Configure environment variables
4. Start the application:
    ```
    # Backend
    cd backend
    npm run dev

    # Frontend
    cd ../frontend
    npm run dev
    ```
## Tech Stack
- **Frontend**: React, Vite, Zustand
- **Backend**: Node.js, Express.js, JWT, Joi, Bcrypt
- **Database**: MongoDB