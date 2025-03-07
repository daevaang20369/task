Greeting App

A simple web application that provides a personalized greeting.

Setup

Backend

Install dependencies:npm install

Start the server:node index.js

The backend runs on http://localhost:5000

Frontend (React)

Install dependencies:npm install

Start the React app:npm start

The frontend runs on http://localhost:3000

API Endpoint

GET /api/greet

Response:

{ "message": "Hello, YourName! Welcome to Younglabs." }

If no name is provided:

{ "error": "Name is required." }

