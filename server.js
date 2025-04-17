// server.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public folder
app.use(express.static("public"));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect("https://bikendrashrestha7.github.io/Project1/");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect("https://bikendrashrestha7.github.io/TypeSetting/#");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect(
    "https://bikendrashrestha7.github.io/sorting-algorithms-webpage/"
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
