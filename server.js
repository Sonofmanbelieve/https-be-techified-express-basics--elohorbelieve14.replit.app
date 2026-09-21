require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------- Middleware ----------------

// Parse JSON bodies
app.use(express.json());

// Serve files inside the public folder
app.use(express.static(path.join(__dirname, "public")));

// Custom middleware: log every request
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// ---------------- Routes ----------------

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "BeTechified Week 2 Node.js and Express API is running"
  });
});

app.get("/api/students", (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: "John Doe", course: "Backend Development" },
      { id: 2, name: "Jane Smith", course: "Node.js and Express" }
    ]
  });
});

app.post("/api/students", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      success: false,
      message: "Name and course are required"
    });
  }

  res.status(201).json({
    success: true,
    message: "Student received successfully",
    student: { name, course }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// ---------------- Start Server ----------------

app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME || "Week 2 API"} running at http://localhost:${PORT}`);
});
