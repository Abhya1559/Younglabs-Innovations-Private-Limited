import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:5173", // Vite's default port
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Test route to verify server is running
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

// Greeting route
app.get("/api/greet", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Test the API at http://localhost:${port}/api/greet?name=test`);
});
