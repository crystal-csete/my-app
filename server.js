/** @format */

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// HTTP logger (in the terminal)
app.use(morgan("tiny"));

// Routes
app.get("/api", (req, res) => {
  const data = {
    username: "crystal",
    age: 43,
  };
  res.json(data);
});

app.get("/api/name", (req, res) => {
  const data = {
    username: "brian",
    age: 34,
  };
  res.json(data);
});

// Server is listening message (in the terminal)
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
