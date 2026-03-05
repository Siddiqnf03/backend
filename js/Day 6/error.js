const express = require('express');
const app = express();
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});
app.get("/error", (req, res) => {
  throw new Error("Something went wrong");
});