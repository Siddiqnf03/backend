const express = require("express");
const app = express();


app.get("/users", (req, res) => {
  res.send("Get all users");
});
app.post("/users", (req, res) => {
  res.send("Create a user");
});
app.put("/users/:id", (req, res) => {
  res.send("Update user");
});
app.delete("/users/:id", (req, res) => {
  res.send("Delete user");
});

app.listen(8000);