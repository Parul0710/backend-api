const express = require("express");
const app = express();

// Route: /sayHello
app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello User" });
});

// Run API on Port 80
app.listen(80, () => {
  console.log("API is running on http://localhost:80");
});
