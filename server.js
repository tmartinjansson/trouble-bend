// backend/server.js

// Import required packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
require("dotenv").config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "https://trouble-fend.vercel.app"], // Replace with your actual Vercel domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Enable JSON parsing
app.use(express.json());

// Request logger middleware (for debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Add this after your middleware setup but before your routes
connectDB();

// Root route - simple test
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

// Test API endpoint
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "API test successful",
    timestamp: new Date().toISOString()
  });
});

// Data endpoint example
app.get("/api/data", (req, res) => {
  res.json({
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" }
    ]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});